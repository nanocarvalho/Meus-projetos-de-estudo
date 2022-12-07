const express = require('express')
const router = express.Router()
const model = require('../model')

router.get('/', async (req, res) => {
    try {
        const allBasic = await model.findAll({ where: {difficulty: 'basic'} })

        res.send(allBasic)
        res.end()
    } catch(err) {
        res.send('Not found')
        res.end()
    }
})


module.exports = router