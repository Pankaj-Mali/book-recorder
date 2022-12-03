const mongoose= require("mongoose");

const Schema= mongoose.Schema;

const bookSchema= new Schema({
    title : ({type:String , required:true , unique:true}),
    isbn:({type:String , required:true}),
    author:({type:String , required:true}),
    description:({type:String , required:true}),
    published_date:({type:String , required:true}),
    publisher:({type:String , required:true}),
    member:({type:Schema.Types.ObjectId , ref:"Member" , required:true})
})

const book = mongoose.model("Book" , bookSchema);

module.exports = book