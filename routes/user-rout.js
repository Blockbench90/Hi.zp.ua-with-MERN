const {Router} = require('express')
const router = Router()
const User = require('../UserModel')


router.get("/users", (req, res) => {
    User.find({}).then(users => {
        res.send(users)
    })
})
router.post("/users", (req, res) => {
    User.create(req.body).then(users => {
        console.log(users)
        res.send(users)
    })
})

module.exports = router