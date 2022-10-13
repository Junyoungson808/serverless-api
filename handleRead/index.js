// third party library
const dynamoose = require('dynamoose');

// to be continued (code locally, zip, and upload);

// Create a Schema
const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String
});

// Create a Model
const peopleModel = dynamoose.model('people-model', peopleSchema);

exports.handler = async (event) => {
  // TODO implement
    console.log('lord of the rings', event.queryStringParameters);
    const response = {statusCode: null, body: null};

    try {
      let peopleRecords = await peopleModel.scan().exec();
      response.statusCode = 200;
      response.body = JSON.stringify(peopleRecords);
    } catch (e) {
      console.log(e);
      response.statusCode = 500;
      response.body = JSON.stringify(e.message);
    }
    return response;
};