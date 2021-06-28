const https = require('https')

module.exports = function (url, obj) {
    const data = JSON.stringify(obj)
    // https://api.telegram.orgsetWebhook
    const options = {
        hostname: 'api.telegram.org',
        port: 443,
        path: '/bot1765703667:AAE1rxOjZfXEdba1O29k_IuNcTK41vkqDsc/' + url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }

    const req = https.request(options, res => {

        res.on('data', d => {
            process.stdout.write(d)
        })
    })

    req.on('error', error => {
        console.error(error)
    })

    req.write(data)
    req.end()
}

// const message = {
//     update_id: 968839067,
//     message: {
//         message_id: 1,
//         from: {
//             id: 495709542,
//             is_bot: false,
//             first_name: 'Keni',
//             username: 'Keni99',
//             language_code: 'en'
//         },
//         chat: {
//             id: 495709542,
//             first_name: 'Keni',
//             username: 'Keni99',
//             type: 'private'
//         },
//         date: 1624886986,
//         text: '/start',
//         entities: [[Object]]
//     }
// }