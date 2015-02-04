//1
var http = require('http'),
    express = require('express'),
    path = require('path');
 
//2 
var app = express();
app.set('port', process.env.PORT || 3000); 
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', function (req, res) {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});
 
app.get('/data', function (req, res) {
   res.end(JSON.stringify([
    {
        "expense": 15,
        "category": "Retail"
    },
    {
        "expense": 18,
        "category": "Gas"
    },
    {
        "expense": 10,
        "category": "Retail"
    },
    {
        "expense": 25,
        "category": "Gas"
    },
    {
        "expense": 66,
        "category": "Retail"
    },
    {
        "expense": 70,
        "category": "Gas"
    },
    {
        "expense": 44,
        "category": "Dining"
    },
    {
        "expense": 13,
        "category": "Dining"
    },
    {
        "expense": 20,
        "category": "Dining"
    },
    {
        "expense": 12,
        "category": "Retail"
    },
    {
        "expense": 15,
        "category": "Gas"
    }
]));
});
 

 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});