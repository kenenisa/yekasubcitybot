const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const post = require('./util/post.js');
//
// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('<h1>Test</h1><h3>go to @Yeka_sub_citybot on telegram</h3>');
})
// 
app.post('/1765703667:AAE1rxOjZfXEdba1O29k_IuNcTK41vkqDsc', function (req, res) {
  const message = req.body.message;
  console.log('----' + message.text,message.chat.first_name);
  post('sendMessage',
    {
      chat_id: message.chat.id,
      text: 'Bot is Live :) your message: ' + message.text + '--your name is: ' + message.chat.first_name + '-- chat id:' + message.chat.id,
      reply_markup:{
        keyboard:[
          [
            {text:'Say yes'},
            {text:'Say no'}
          ],
          [
            {text:'or say cancel'},
          ],
        ]
      }
    });

  res.end("yes");
})
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || "localhost");

app.listen(app.get("port"), function () {
  console.log(
    "%s server listening at http://%s:%s",
    process.env.NODE_ENV,
    app.get("host"),
    app.get("port")
  );
});
// [In reply to Keni]
// Elias habib
// Feeliasconst@gmail.com
// Dailycoding63#e