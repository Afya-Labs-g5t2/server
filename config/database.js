
module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {              //primeiro erro - ssl:true
          require: true,            //segundo erro
          rejectUnauthorized: false //corrigido com essas duas linhas
        }
    },  
    host: process.env.HOST, 
    username: process.env.USER, 
    password:  process.env.PASSWORD, 
    database: process.env.DATABASE,
    define: {
        timestamps: true,  //
    }
}