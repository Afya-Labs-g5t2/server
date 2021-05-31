const User = require("../models/User");

module.exports = {

    async index(req,res) {
        const users = await User.findAll();
        return res.json(users);
    },    
    
    async store(req,res) {
        const {firstName, lastName, email} = req.body;

        const user = await User.create({firstName, lastName, email});

        return res.json(user);
    }
}