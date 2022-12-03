const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const member = require("./models/member");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const home = require("./routes/bookRoutes")
const memberentry = require("./routes/register")

const secrete = "pankaj@secrete"


const app = express();
mongoose.connect("mongodb://0.0.0.0/bookLibrary", (e) => {
    if (e) { console.log(e.message) } else { console.log("mongoose is up ") }
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/home" , home );
app.use("/" ,memberentry);













app.post(" ", async (req, res) => {

    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, secrete);
        const userData = await member.findOne({ _id: decoded.data });

        if(userData._id != req.body.member){
          return   res.status(400).json({
                message:"You are NOt Authorized"
            })
        }
        const data = await todo.create(req.body);
        res.status(200).json({
            data: data
        })
    } catch (e) {

        res.status(400).json({
            status: "Failed",
            message: e.message
        })

    }
})


app.listen(8080, (e) => {
    if (e) { console.log(e.message) } else { console.log("server is up at 8080") }
})