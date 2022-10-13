// third party library
const dynamoose = require('dynamoose');

// Create a Schema
const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

// Create a Model
const peopleModel = dynamoose.model('jgs-lab18-people-dynamodb', peopleSchema);
exports.handler = async (event) => {
console.log('asdfasdgasdfasd------------', event.body);

let parsedBody = JSON.parse(event.body);
let {id, name, phone} = parsedBody;

let person = {id, name, phone};
console.log(person);

const response = {statusCode: null, body: null};

try {
  let peopleRecords = await peopleModel.create(person);
  response.statusCode = 200;
  response.body = JSON.stringify(peopleRecords);
} catch (e) {
  console.log(e);
  response.statusCode = 500;
  response.body = JSON.stringify(e.message);
}
return response;
};