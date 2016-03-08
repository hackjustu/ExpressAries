var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/download', function (req, res) {
    res.download(path.join(__dirname, '/downloads/content.txt'));
});

app.get('/about', function (req, res) {
    res.redirect('/about.html');
});

app.post('/subscribe', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    res.send(name + ' has subscribed with ' + email);
});

app.listen(3000, function () {
    console.log('Server started on port 3000');
});