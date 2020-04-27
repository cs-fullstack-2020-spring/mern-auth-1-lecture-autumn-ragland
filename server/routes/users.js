let express = require('express');
let router = express.Router();
router.use(express.json());

// create references for modules and key needed for authentication and encryption
let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
let keys = require("../config/keys").secretOrKey;

let UserCollection = require('../models/UserSchema');

router.get('/test', (req, res) => {
    res.send("TEST from user file");
});

router.post('/register', (req, res) => {
    // res.send("Test Register");
    UserCollection.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                console.log("User already exists");
                res.send(`User with ${req.body.email} already exists`);
            }
            else {
                let newUser = new UserCollection({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(newUser.password, salt, (error, hash) => {
                        if (error) {
                            console.log("Password has not been hashed")
                            res.send(error);
                        }
                        else {
                            newUser.password = hash
                            newUser.save()
                                .then(user => res.json(user));
                        }
                    });
                })
            }
        });
})

router.post('/login', (req, res) => {
    res.send("Test Login");
})

module.exports = router;