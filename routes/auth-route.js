const router = require('express').Router()
// const User = require('../models/user')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var ObjectId = require('mongoose').Types.ObjectId;
router.get('/ok', (req, res) => {
    res.json({ message: "All Working" })
})
module.exports = router