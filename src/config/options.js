module.exports = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Prontuário Digital 2",
			version: "0.1.0",
			description: "Uma API desenvolvida em node.js, Sequelize e Postgres para o desafio da Gama Academy em conjunto com a Afya Educacional"
		},
		server: [
			{
			url:"http://localhost:3000"
			}
		],
		
	},
	apis: ["../routes.js"]
} 