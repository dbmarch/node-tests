const express = require ('express');
var app = express();

app.get ('/', (req,res) => {
    res.send('Hello World!');
});

app.get('/empty', (req,res) => {
    res.status(404).send(
        {error: 'Page not found',
          name: 'Todo App v1.0'});
});

app.get ('/users', (req, res) => {
    var users = 
      [ {name: "Dave", age: 50},
        {name: "Harry", age: 30}
        ];
        res.send(users);
})

app.listen(3000);

module.exports.app = app;