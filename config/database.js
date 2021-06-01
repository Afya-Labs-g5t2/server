
module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {              //primeiro erro - ssl:true
          require: true,            //segundo erro
          rejectUnauthorized: false //corrigido com essas duas linhas
        }
    },  
    host: process.env.HOST, //"ec2-23-21-229-200.compute-1.amazonaws.com",//
    username: process.env.USER, //"bdlwweevrljiqx",//
    password:  process.env.PASSWORD, //"1bbdac1e1dcdd4efa746bd6114d672d328a46ce17ae172209ab309569365ad93",//
    database: process.env.DATABASE, //"ddvkv5irs3dhs1",//
    //port: '5432',
    define: {
        timestamps: true,  //
        //underscored: true //formato de snakecasse
    }
}