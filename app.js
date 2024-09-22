const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router.js');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routes);
app.use(express.static('public'));
app.listen(4001,()=>{
    console.log('server running http://localhost:4001');
});
