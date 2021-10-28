// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/fe_education_dev');
    console.log('---- CONNECT SUCCED ----');
  } catch (error) {
    console.log(error);
    console.log('----Connect Failed----');
  }
}

module.exports = { connect };
