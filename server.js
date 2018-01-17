var express = require('express');
var app = express();
var parser = require('body-parser');

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(express.static('client/build'));
app.use(express.static('client/public'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/client/build/index.html')
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("listening on port", host, port);

});
