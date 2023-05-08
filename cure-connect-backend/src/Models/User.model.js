const mongoose = require('mongoose');
const UserSchmea=mongoose.Schema({
    name: {type:String,required:true},
        email : {type:String,required:true},
        password : {type:String,required:true}
},{
versionKey:false
})
const UserModal=mongoose.model("user",UserSchmea)
module.exports={
    UserModal
}