const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 

app.listen(8080, function() {
    console.log('listening on 8080')
})

app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname+'/start.html')
});
app.get('/index', function(요청, 응답) { 
  응답.sendFile(__dirname+'/index.html')
});