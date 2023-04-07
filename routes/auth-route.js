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
router.post('/profile/:id', (req, res) => {
    User.findById(req.params.id).then((value) => {
        res.json({ success: true, data: value })
    }).catch(() => {
        res.json({ message: "Error fetching" })
    })
})
router.put('/edit/:id', (req, res) => {
    var obj = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        about: req.body.about,
        linkedin: req.body.linkedin,
        github: req.body.github,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        highested: req.body.highested,
        currently: req.body.currently,
        interest: req.body.interest
    }
    User.findByIdAndUpdate(req.params.id, { $set: obj }).then(() => {
        res.json({ success: true, message: "Updated Successfully" })
    }).catch((error) => {
        res.json({ success: false, message: "Some Error" });
    });

});
router.put('/pedit/:id', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        var ob = {
            "password": hash
        }
        User.findByIdAndUpdate(req.params.id, { $set: ob }).then(() => {
            res.json({ success: true, message: "Password Changed" })
        }).catch(() => {
            res.json({ success: false, message: "Error Something" })
        })
    })
})

module.exports = router