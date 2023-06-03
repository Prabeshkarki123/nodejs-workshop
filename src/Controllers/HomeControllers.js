//const { Sequelize } = require("sequelize");
const sequelize= require('@root/sequelize-config');
const User= require('@/Models/UserModels');
module.exports={
    index: async(req, res)=>{
        const list = await User.findAll();
        res.send(list);
        // const list=[
        //     {name:"Prabesh", address:"Birtamode"},
        //     {name:"Prabesh", address:"Birtamode"},
        //     {name:"Prabesh", address:"Birtamode"}
           
        // ]
        // res.render('index',{data:'user',list});
    },

    new: async(req, res) => {
        const user = User.build({name : 'test', email:'test@gmail.com', address: 'addr'});
        user.save();
        res.send("Success");
    }
    
}