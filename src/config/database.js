require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

let db = {};

if (process.env.NODE_ENV === "test") {
  db = {
    dialect: process.env.DB_DIALECT,
    storage: './__tests__/database.sqlite',
    retry: {
      max: 10,
      match: [
        'SQLITE_BUSY: database is locked'
      ]
    },
    define: {
        timestamps: true,  //
        underscored: true,  // snake_case
        underscoredAll: true
    }
  }
}
else {
  db = {
    dialect: 'postgres',
    dialectOptions: {              //necessário para rodar no heroku
        ssl: {                        //necessário para rodar no heroku
          require: true,              //necessário para rodar no heroku
          rejectUnauthorized: false   //necessário para rodar no heroku
        }                             //necessário para rodar no heroku
    },                                //necessário para rodar no heroku*/
    host: process.env.HOST, 
    username: process.env.USER, 
    password:  process.env.PASSWORD, 
    database: process.env.DATABASE,
    define: {
        timestamps: true,  //
        underscored: true,  // snake_case
        underscoredAll: true
    }
  }
}

module.exports = db;
