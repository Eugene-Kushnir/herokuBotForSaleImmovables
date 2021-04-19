const TelegramBot = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const config = require('./config')
const helper = require('./helper')
const keyboarsScreen = require('./keyboarsScreen')
const kb = require('./keyboards')
const database = require('../database.json')
const { flat } = require('./keyboards')


helper.logStart()

mongoose.Promise = global.Promise
mongoose.connect(config.DB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

require('./model/flat.modal')

const Flat = mongoose.model('flat')



// database.flat.forEach(f => new Flat(f).save().catch(e => console.log(e)))

//==================================//
const bot = new TelegramBot(config.TOKEN, {
    polling: true
})

bot.on('message', msg => {
    const chatId = msg.chat.id
    console.log('working', msg.from.first_name)

    switch (msg.text) {
        case kb.home.sell:
            bot.sendMessage(chatId, `Пожалуйста, укажите объект:` , {
                reply_markup: {
                    keyboard: keyboarsScreen.sell
                }
            })
            break
        case kb.home.notary:
            bot.sendMessage(chatId, `Выберите кнопку` , {
                reply_markup: {
                    keyboard: keyboarsScreen.notary
                }
            })
            break
        case kb.home.buy:
            bot.sendMessage(chatId, `Пожалуйста, укажите объект:` , {
                reply_markup: {
                    keyboard: keyboarsScreen.buy
                }
            })
            break
        case kb.buy.flat: 
            bot.sendMessage(chatId, `Сколько комнат Вас интересует?` , {
                reply_markup: {
                    keyboard: keyboarsScreen.flat
                }
            })
            break
            case kb.flat.one:
                sendFlatByQuery(chatId, {"room": 1})
                break
            case kb.flat.two:
                sendFlatByQuery(chatId, {"room": 2})
                break
            case kb.flat.three:
                sendFlatByQuery(chatId, {"room": 3})
                break
            case kb.flat.four:
                sendFlatByQuery(chatId, {"room": 4})
                break
        case kb.back:
            bot.sendMessage(chatId, msg.from.first_name + `, выберите интересующий Вас раздел`, {
                reply_markup: {
                    keyboard: keyboarsScreen.home
                }
            })
            break
    }
})

bot.onText(/\/start/, msg => {
    const userName = msg.from.first_name
    const chatId = msg.chat.id


    const text = `Здравствуйте, ${userName}! \nВыберите команду для начала работы:`
    bot.sendMessage(chatId, text, {
        reply_markup: {
            keyboard: keyboarsScreen.home
        }
    })
    // bot.sendMessage(chatId, text)
    

})

bot.onText(/\/f(.+)/, (msg, [source, match]) => {
    const chat_id = msg.chat.id
    const flatID = helper.getItemID(source)
    Flat.findOne({_id: flatID}).then(flat => {
        bot.sendMessage(chat_id, flat.link)
    })
})

//==============Вспомогательные функции-=========================

function sendFlatByQuery(chatId, query) {
    Flat.find(query).then(flat => {
        const html = flat.map((f, i) => {
            return `<b>${i+1}</b> ${f.name} - /f${f._id}`
        }).join('\n')

        sendHTML(chatId, html, 'flat')
    })
}

function sendHTML(chatId, html, kbName = null){
    const options = {
        parse_mode: 'HTML'
    }

    if(kbName) {
        options['reply_markup'] = {
            keyboard: keyboarsScreen[kbName]
        }
    }

    bot.sendMessage(chatId, html, options)

}