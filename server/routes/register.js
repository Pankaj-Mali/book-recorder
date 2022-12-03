const express = require("express");
const mongoose = require("mongoose");
const member = require("../models/member");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secrete = "pankaj@secrete"
const router = express.Router()


router.post("/register", async (req, res) => {

    try {
        let pass = req.body.pass
        pass = await bcrypt.hash(pass, 10);
        req.body.pass = pass;
        const data = await member.create(req.body);
        res.status(200).json({
           message:"registration  complited"
        })
    } catch (e) {

        res.status(400).json({
            status: "Failed",
            message: e.message
        })

    }
})

router.post("/login", async (req, res) => {

    try {
        const email = req.body.email
        const user_data = await member.findOne({ email: email });
        if (user_data != null) {
            const input = await bcrypt.compare(req.body.pass, user_data.pass);

            if (input) {
                const tocken = jwt.sign({
                    exp: Math.floor(Date.now() / 100) + (60 * 60),
                    data: user_data._id
                }, secrete)

                res.status(200).json({
                    message: tocken,
                    data:user_data._id
                })
            } else {
                res.status(401).json({
                    message: "Wrong password"
                })

            }
        } else {
            res.status(401).json({
                message: "user not resistered"
            })
        }
    } catch (e) {

        res.status(400).json({
            status: "Failed",
            message: e.message
        })

    }
});

module.exports = router ;
