'use strict';

// third party library
const dynamoose = require('dynamoose');

// to be continued (code locally, zip, and upload);


exports.handler = async (event) => {
    
    console.log('lord of the rings', event.queryStringParameters)
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from HandleRead!'),
    };
    return response;
};