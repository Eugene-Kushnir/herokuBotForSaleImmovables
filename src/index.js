const TelegramBot = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const config = require('./config')
const helper = require('./helper')
const keyboarsScreen = require('./keyboarsScreen')
const kb = require('./keyboards')


helper.logStart()

mongoose.connect()

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