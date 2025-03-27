const express = require('express')
const router = express.Router()
const User = require('../models/User.model')

router.get('/users', async (req, res, next) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        next(error)
    }
})

router.get('/users/:id', async (req, res, next) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return next(createError(400, `Invalid user ID`))
        }
        
        const user = await User.findById(req.params.id)
        if (!user) {
            return next(createError(404, `User with id ${req.params.id} not found`))
        }

        res.json(user)
    } catch (error) {
        next(error)
    }
})