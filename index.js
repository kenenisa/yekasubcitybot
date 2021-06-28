const express = require('express');
const app = express();

// app.use(express.bodyParser());

app.get('/',function(req,res){
    res.send('<h1>hello world</h1>');
})

app.listen(3000);
// [In reply to Keni]
// Elias habib
// Feeliasconst@gmail.com
// Dailycoding63#e