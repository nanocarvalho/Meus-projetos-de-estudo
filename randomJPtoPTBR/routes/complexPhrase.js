const express = require('express')
const router = express.Router()
const model = require('../model')

router.get('/complex', async (req, res) => {
    try {
        const allComplex = await model.findAll({ where: {difficulty: 'complex'} })
        res.send(allComplex)
        res.end()
    } catch(err) {
        res.send('Not found')
        res.end()
    }
})

module.exports = router