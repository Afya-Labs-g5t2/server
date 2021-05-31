#passo a passo de como fiz a api

npm init

npm i esxpress

npm i nodemom -D

 - criei os scripts para start e dev

 - primeiro eu criei um versãominima de um servidor express

 - substitui o send da requsição get por sendFile e inclui o path no require.

 - criei um index.html para ser a pagina inicial da api

npm i sequelize pg pg-hstore

npm i sequelize-cli -D 

npx sequelize init

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

npx sequeize db:migrate
