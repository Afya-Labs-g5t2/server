require('dotenv').config();
// const request = require('supertest');
// const app = require("../src/app");
require("../src/database");
const UserSession = require("./integration/usuario-session.test.js")

// const databaseHelper = require('../src/database/migrations');
module.exports= async () => {

await beforeAll(() => {

   UserSession();

})
}

// afterAll(() => {
//   return databaseHelper.truncate();
// });

// afterAll(() => {
//   return databaseHelper.close();
// })