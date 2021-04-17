const TelegramBot = require('node-telegram-bot-api')
const debug = require('./testHelper')
const fs = require('fs')
const { doesNotThrow } = require('assert')
const TOKEN = '1729436710:AAFL9e27pjej5t2n5aZP1r4U3m06oJWOdB8'

console.log('Бот запущен')

const bot = new TelegramBot (TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})



// bot.onText(/\/contact/, msg => {
//     bot.sendContact(msg.chat.id, '+380996237525', 'Vasya', { //3ий параметр необязателен
//         last_name: 'Kushnir'
//     })
// })

//геолокация
// bot.onText(/\/location/, msg => {
//     //48.475485, 35.021199
//     bot.sendLocation(msg.chat.id, 48.475485, 35.021199)
// })

// видео отправлять sendMessage только с mp4, отсальные черещ srndDociment

//  стикеры надо webp расширение

/* Отправляем документ (2 способа) */
// bot.onText(/\/doc1/, msg => {
//     bot.sendDocument(msg.chat.id, './jsForChild.pdf')
// })

// bot.onText(/\/doc2/, msg => {
//     bot.sendMessage(msg.chat.id, 'Start document uploading...')
//     fs.readFile(__dirname + '/jsForChild.pdf', (err, doc) => {
//         bot.sendAudio(msg.chat.id, doc, {
//             caption: 'JS for child'
//         }).then(() => {
//             bot.sendMessage(msg.chat.id, 'Uploading finish')
//         })
//     })
// })


// /* Музыкальный файл отправление */
// // bot.onText(/\/audio/, msg => {
// //     bot.sendAudio(msg.chat.id, './music.mp3')
// // })
// bot.onText(/\/audio2/, msg => {
//     bot.sendMessage(msg.chat.id, 'Start audio uploading...')
//     fs.readFile(__dirname + '/music.mp3', (err, data) => {
//         bot.sendAudio(msg.chat.id, data).then(() => {
//             bot.sendMessage(msg.chat.id, 'Uploading finish')
//         })
//     })
// })





// //**Картинка отправление */
// // требуется fs зависимость
// bot.onText(/\/pic/, msg => {
//     bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/botPic.jpg'))
// })
// // можно без подписи caption использовать
// bot.onText(/\/test/, msg => {
//     bot.sendPhoto(msg.chat.id, './botPic.jpg', {
//         caption: "This is cat photo"
//     })
// })



// const inline_keyboard = [
//     [
//         {
//             text: 'Forward',
//             callback_data: 'forward'
//         },
//         {
//             text: 'Reply',
//             callback_data: 'reply'
//         }
//     ],
//     [
//         {
//             text: 'Edit',
//             callback_data: 'edit'
//         },
//         {
//             text: 'Delete',
//             callback_data: 'delete'
//         }
//     ]
// ]

// bot.on('callback_query', query => {

//     const{chat, message_id, text} = query.message

//     switch (query.data){
//         case 'forward':
//             //куда, откуда, что
//             bot.forwardMessage(chat.id, chat.id, message_id)
//             break
//         case 'reply':
//             bot.sendMessage(chat.id, `Отвечаем на сообщение`, {
//                 reply_to_message_id: message_id
//             })
//             break
//         case 'edit':
//             bot.editMessageText(`${text} (edited)`, {
//                 chat_id: chat.id,
//                 message_id: message_id,
//                 reply_markup: {inline_keyboard}
//             })
//             break
//         case 'delete':
//             bot.deleteMessage(chat.id, message_id)
//             break
//     }

//     bot.answerCallbackQuery({
//         callback_query_id: query.id
//     })
// })

// bot.onText(/\/start/, (msg, [source, match]) => {
//     const chatId = msg.chat.id
//     bot.sendMessage(chatId, 'Keyboard', {
//         reply_markup: {
//             inline_keyboard
//         }
//     })
// })

// bot.on('message', msg => {
//     const chatId = msg.chat.id

//     bot.sendMessage(chatId, 'Inlinek keyboard',  {
//         reply_markup: {
//             inline_keyboard: [
//                 [
//                     {
//                         text: 'Google',
//                         url: 'https://www.google.com.ua/'
//                     }
//                 ], 
//                 [
//                     {
//                         text: 'Reply',
//                         callback_data: 'reply'
//                     },
//                     {
//                         text: 'Forward',
//                         callback_data: 'forward'
//                     }
//                 ]
//             ]
//         }
//     })

// })

// bot.on('callback_query', query => {
//     // bot.sendMessage(query.message.chat.id, debug(query))
//     bot.answerCallbackQuery(query.id, `${query.data}`)
// })


// bot.on('message', msg => {

//     const chatId = msg.chat.id

//     if(msg.text === 'Закрыть') {
//         bot.sendMessage(chatId, 'Закрываю клавиатуру', {
//             reply_markup: {
//                 remove_keyboard: true
//             }
//         })
//     } else if (msg.text === 'Ответить') {
//         bot.sendMessage(chatId, 'Отвечаю.', {
//             reply_markup: {
//                 force_reply: true
//             }
//         })
//     } else {
//         bot.sendMessage(chatId, 'Клавиатура',  {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'Отправить местоположение',
//                         request_location: true
//                     }],
//                     ['Ответить', 'Закрыть'],
//                     [{
//                         text: 'Отправить контакт',
//                         request_contact: true
//                     }]
//                 ],
//                 one_time_keyboard: true
//             }
//         })
//     }

    
// })



// bot.on('message', msg => {

//     setTimeout(()=> {
//         bot.sendMessage(msg.chat.id, `https://www.youtube.com/watch?v=sCE9CpJLpo8&list=PLhgRAQ8BwWFaxlkNNtO0NDPmaVO9txRg8&index=12`, {
//             disable_web_page_preview: true, // превью сылки
//             disable_notification: false // уведомление о новом сообщении
//         })
//     },4000)


// })

// bot.on('message', msg => {
//     const markdown = `
//         *Hello, ${msg.from.first_name}!!!* // жирный шрифт
//         _Italic text_
//     `



//     bot.sendMessage(msg.chat.id, markdown, {
//         parse_mode: 'Markdown'
//     })
// })


// bot.on('message', msg => {
// const html = `<strong>Hello, ${msg.from.first_name}</strong>
// <pre>
// ${debug(msg)}
// </pre>`    


//     bot.sendMessage(msg.chat.id, html, {
//         parse_mode: 'HTML'
//     })
// })


// bot.on('message', (msg) => {
//     const { id } = msg.chat
//     bot.sendMessage(id, debug(msg))
//         .then(() => {
//             console.log("Message has been send")
//         })
//         .catch((error) => {
//             console.error(error)
//         })

// })
// bot.onText(/\/start/, msg => {
//     const { id } = msg.chat

//     bot.sendMessage(id, debug(msg))
// })

// bot.onText(/\/help (.+)/, (msg, [source, match]) => {
//     const { id } = msg.chat
//     bot.sendMessage(id, debug(match))
// })

