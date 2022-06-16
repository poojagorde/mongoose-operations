const express = require('express');

const mongoose = require('mongoose');

const app = express();

let port = 3000;

app.use(

  express.urlencoded({

    extended: false,

  })

);
mongoose.connect('mongodb+srv://mongodb+srv://PoojaGorde:pooja2610@cluster0.locza.mongodb.net/?retryWrites=true&w=majority/Traineedb');

const connection = mongoose.connection;

connection.once('open', function () {

  console.log('Database connection is done');

})
//const mongoose = require('mongoose')

app.listen(port, () => {

    console.log(`Server running on port ${port}`)
  
  });