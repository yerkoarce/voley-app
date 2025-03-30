const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Player = require('../models/Player.model')
const playerSchema = require('../schemas/playerSchema')
const createError = require('http-errors')
const z = require('zod')

router.get('/players', async (req, res, next) => {
    try {
        const players = await Player.find({})
        res.json(players)
    } catch (error) {
        next(error)
    }
})

router.post('/players', async (req, res, next) => {
    try {
        const validateData = playerSchema.safeParse(req.body)

        if (!validateData.success) {
            return next(createError(400, 'Validation failed', validateData.error.errors))
        }

        const newPlayer = await Player.create(req.body)

        res.status(201).json({ Message: 'Player created successfully', Player: newPlayer })
    } catch (error) {
        next(error)
    }
})