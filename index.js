var express = require('express');  
var request = require('request');
var apiServerHost = "http://www.facebook.com:80";
var app = express();  
app.use('/proxy', function(req, res) {  
  var url = req.url.replace('/?url=','');
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 80);
