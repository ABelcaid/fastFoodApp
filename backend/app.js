const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const ejs = require('ejs');
const path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');

const logger = require('./config/logger')

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.static('views'))
app.use(express.static(__dirname + 'views'));



mongoose.connect('mongodb://localhost:27017/fastFoodDB' , {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  logger.info("Successfully connected to the database");    
}).catch(err => {
  logger.error('Could not connect to the database. Exiting now...', err);
  process.exit();
});




// import router 

const categoryRoute = require('./routes/category');
const sousCategoryRoute = require('./routes/sousCategory');
const productRoute = require('./routes/product');
const codepromoRoute = require('./routes/codepromo');
const tableRoute = require('./routes/table');
<<<<<<< HEAD
=======
const pointFideliteRoute = require('./routes/pointFidelite');
>>>>>>> 2416134464b3e07891f6886a8ce1ee1744fc8f31

app.use('/category' ,categoryRoute);
app.use('/sousCategory' ,sousCategoryRoute);
app.use('/product' ,productRoute);
app.use('/Codepromo' ,codepromoRoute);
app.use('/table' ,tableRoute);
<<<<<<< HEAD
=======
app.use('/pointFidelite' ,pointFideliteRoute);
>>>>>>> 2416134464b3e07891f6886a8ce1ee1744fc8f31











app.get('/', (req, res) => {
  res.send('Hello World!')
})
























app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})