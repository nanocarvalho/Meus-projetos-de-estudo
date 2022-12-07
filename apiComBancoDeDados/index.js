const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const Note = require('./note')

//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const databaseSync = async () => {
    const database = require('./db')
    try {
        await database.sync()

    } catch (err) {
        console.log(err)
    }
}

//GET
app.get('/', async (req, res) => {
    try {
        await databaseSync()
        const allNotes = await Note.findAll()
        res.send(allNotes)
        res.end()
    } catch (err) {
        console.log(err)
    }
})

//GET a single note by id
app.get('/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const noteSelected = await Note.findByPk(Number(req.params.id))
        if (noteSelected) {
            res.send(noteSelected)
            res.end()
        } else {
            throw new Error
        }
    } catch (err) {
        res.send(`The id ${req.params.id} doesn't exist`)
        res.end()
    }
})

//POST
app.post('/new',  async (req, res) => {
    try {
        await Note.create({
            content: req.body.content
        })
        databaseSync()
        res.end()
    } catch (err) {
        console.log(err)
    }
})

//PUT
app.put('/edit/:id', async (req, res) => {
    try {
        const noteToEdit = await Note.findByPk(Number(req.params.id))

        if(noteToEdit !== null) {
            noteToEdit.content = req.body.content
            noteToEdit.save()
            databaseSync()
            res.end()
        } else {
            throw new Error
        }

    } catch (err) {
        res.send(`The id ${req.params.id} doesn't exist`)
        res.end()
    }
})


//DELETE
app.delete('/delete/:id', (req, res) => {
    try {
        Note.destroy({where: {id: Number(req.params.id)}})
        console.log(allNotes)
        res.end()
    } catch (err) {
        res.send(`The id ${req.params.id} doesn't exist`)
        res.end()
    }
})

app.listen(port, () => {
    console.log(`Api started on ${port} Port`)
  })
