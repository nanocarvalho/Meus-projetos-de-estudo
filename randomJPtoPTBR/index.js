const express = require('express')
const app = express()
const port = 8080
const rateLimit = require('express-rate-limit')
const helmet = require("helmet");

//Routes
const basicPhrase = require('./routes/basicPhrase')
const complexPhrase = require('./routes/complexPhrase')


const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	max: 250, // Limit each IP to 250 requests per `window` (here, per 10 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


const databaseSync = async () => {
    const database = require('./db')
    try {
        await database.sync()
        
    } catch (err) {
        console.log(err)
    }
}

databaseSync()


app.use(basicPhrase)
app.use(complexPhrase)
app.use(limiter)
app.use(helmet())
app.disable('x-powered-by')

app.listen(port, ()=> {
    console.log(`Running on port ${port}`)
})