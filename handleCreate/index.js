// third party library
const dynamoose = require('dynamoose');

// Create a Schema
const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String
});

// Create a Model
const peopleModel = dynamoose.model('jgs-lab18-people-dynamodb', peopleSchema);
console.log('asdfasdgasdfasd------------', event.body);

let {id, name, phone} = event.queryStringParameters;

let person = {id, name, phone};
console.log('CREATE PLEASE***************', person)

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from handleCreate');
  };
  return response;
};