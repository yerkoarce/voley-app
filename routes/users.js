const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const userSchema = require('../schemas/userSchema')
const bcrypt = require('bcrypt')
const createError = require('http-errors')

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

router.post('/users', async (req, res, next) => {
    try {
        const validateData = userSchema.validateData(req.body)

        const passwordHash = await bcrypt.hash(validateData.password, 10)

        const user = await User.create({
            name: validateData.name,
            username: validateData.username,
            password: passwordHash
        })

        await user.save()

        res.status(201).json({ Message: 'User created successfully', userId: user._id })
    } catch (error) {
        if(error.errors) {
            return next(createError(400, 'Bad request', error.errors)) // Errores de zod
        }
        return next(createError(500, 'Internal server error', error))
    }
})

module.exports = router