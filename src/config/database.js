require('dotenv/config');

module.exports = {
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
