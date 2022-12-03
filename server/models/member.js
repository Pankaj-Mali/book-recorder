const mongoose= require("mongoose");

const Schema= mongoose.Schema;

const memberSchema= new Schema({
    email: ({type:String , required:true , unique:true}),
    pass:({type:String , required:true})
})

const member = mongoose.model("Member" , memberSchema);

module.exports = member