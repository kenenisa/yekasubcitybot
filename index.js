const express = require('express');
const app = express();

// app.use(express.bodyParser());

app.get('/',function(req,res){
    res.send('<h1>hello world</h1>');
})

app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || "localhost");

app.listen(app.get("port"), function() {
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