const express = require('express')
const router = express.Router()
const User = require("../models/User")
const bcrypt = require('bcryptjs');
const { query, validationResult, body } = require('express-validator');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'yash@isarockstar'
const fetchUser = require("../middleware/fetchUser")
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password must be atleast 5 char').isLength({ min: 4 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ success: true, authToken });
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has occured")
    }
})

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password must be atleast 5 char').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("Please try to login with valid credentials")
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            console.log("Wrong password")
            return res.status(400).json("Please try to login with valid credentials")
        }
        const data = {
            user: {
                user: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ success: true, authToken });
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has occured")
    }
})
router.post('/getUser', fetchUser ,
    async (req, res) => {
        //get the user from the jwt token and add id to req object
    try {
        userId = req.user.user
        const user = await User.findById(userId).select("-password");
        res.json(user)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has occured")
    }
})
module.exports = router