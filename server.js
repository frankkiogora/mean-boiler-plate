const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');


const app = express();

app.use(express.static(__dirname + '/public/dist'));
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);


app.listen(8000, () =>
console.log('Node server listening at port 8000'));
