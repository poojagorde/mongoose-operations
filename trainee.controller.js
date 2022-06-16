
const Trainee = require('../model/trainee.model');



module.exports.getTrainees = async (request, response) => {

  try {

    let trainees = await Trainee.find();

    response.status(200).send({ success: true, trainees });

  } catch (error) {

    console.log(error);

    response.status(400).send({ success: false, message: error.message });

  }

}
