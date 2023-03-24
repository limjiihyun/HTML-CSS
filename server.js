const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(요청, 응답) { 
    응답.send('start/html');
  });;

  app.get('/introduce', function(요청, 응답) { 
    응답.render('index.html');
  });