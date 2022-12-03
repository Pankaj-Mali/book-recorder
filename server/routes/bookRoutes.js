const express = require("express");
const mongoose = require("mongoose");
const member = require("../models/member");
const book = require("../models/book")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secrete = "pankaj@secrete"
const router = express.Router();



// app.post(" ", async (req, res) => {

//     try {
//         const token = req.headers.authorization;
//         const decoded = jwt.verify(token, secrete);
//         const userData = await member.findOne({ _id: decoded.data });

//         if(userData._id != req.body.member){
//           return   res.status(400).json({
//                 message:"You are NOt Authorized"
//             })
//         }
//         const data = await todo.create(req.body);
//         res.status(200).json({
//             data: data
//         })
//     } catch (e) {

//         res.status(400).json({
//             status: "Failed",
//             message: e.message
//         })

//     }
// })

router.post("/addBook" , async(req,res)=>{

    try{

        const info = await book.findOne({member:req.body.member ,title:req.body.title});
        console.log(info)

        if(info){
            return res.status(400).send("book is there in the library")
        }else{
            const data= await book.create(req.body);

            return res.status(200).send(data)
        }

    }catch(e){
        res.status(400).send(e.message)
    }


});

router.get("/bookList/:member" , async(req,res)=>{
    console.log(req.params.member)

    try{
        const data= await book.find({member:req.params.member});
        res.status(200).json({
            data:data
        });

    }catch(e){
        res.status(400).send(e.message)
    }


});

router.put("/book/:title" , async(req,res)=>{

    try{
        console.log(req.body)
        const data= await book.findOneAndUpdate({title:req.params.title}, req.body);
        res.status(200).json({
            data:data
        });

    }catch(e){
        res.status(400).send(e.message)
    }
});

router.delete("/book/:title" , async(req,res)=>{

    try{
        const data= await book.findOneAndDelete({title:req.params.title})
        res.status(200).json({
            data:data
        });

    }catch(e){
        res.status(400).send(e.message)
    }
});

module.exports=router

