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
  // host: 'ec2-23-21-229-200.compute-1.amazonaws.com', 
  // username: 'bdlwweevrljiqx', 
  // password: '1bbdac1e1dcdd4efa746bd6114d672d328a46ce17ae172209ab309569365ad93', 
  // database: 'ddvkv5irs3dhs1',
  define: {
      timestamps: true,  //
  }
}