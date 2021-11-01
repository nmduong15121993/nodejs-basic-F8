// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/fe_education_dev');
    console.log('|----------------------|');
    console.log('|--- CONNECT SUCCED ---|');
    console.log('|----------------------|');
  } catch (error) {
    console.log(error);
    console.log('|--------------------|');
    console.log('|---Connect Failed---|');
    console.log('|--------------------|');
  }
}

module.exports = { connect };
