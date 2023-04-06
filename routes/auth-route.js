const router = require('express').Router()
const User = require('../models/user')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var ObjectId = require('mongoose').Types.ObjectId;
router.get('/ok', (req, res) => {
    res.json({ message: "All Working" })
})
//Registration
router.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        const data = new User({
            name: req.body.name,
            phone: req.body.phone,
            password: hash,
            email: req.body.email
        })

        data.save().then(() => {
            res.json({ message: "Registered Successfully", success: true })
        }).catch(() => {
            res.json({ message: "All Fields Are Required", success: false })
        })
    })
})
//Login
router.post('/login', (req, res) => {
    User.find({ email: req.body.email }).then((value) => {
        if (value.length < 1) {
            res.json({ success: false, message: "Email Not Found For Details" })
        }
        else {
            const user = value[0]
            bcrypt.compare(req.body.password, user.password, (err, value) => {
                if (value) {
                    const payload = {
                        userId: user._id,
                        userName: user.name
                    }
                    const token = jwt.sign(payload, "webBatch")
                    res.json({ success: true, message: "Login Successful", token: token })
                }
                else {
                    res.json({ success: false, message: "Credentials Not Matched For Email" })
                }
            })
        }
    })
})
module.exports = router