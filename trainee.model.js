
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TraineeSchema = new Schema({

  name: {

    type: String

  },

  doj: {

    type: Date

  },

  degree: {

    type: String

  },

})

var Trainee = mongoose.model('Trainee', TraineeSchema);

module.exports = Trainee