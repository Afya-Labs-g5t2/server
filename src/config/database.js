require("dotenv").config({
  path:process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

let db = {}
if(process.env.NODE_ENV === "test"){
  db = {
    dialect: "sqlite",
    storage: "./testes/database.sqlite",
    retry: {
      max: 10,
      match: [
        'SQLITE_BUSY: database is locked'
      ]
    },
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  };
}
else{
  db = {
    dialect: "postgres",
    dialectOptions: {
      ssl: {              //primeiro erro - ssl:true
        require: true,            //segundo erro
        rejectUnauthorized: false //corrigido com essas duas linhas
      }
    },  
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  };
}

module.exports = db


