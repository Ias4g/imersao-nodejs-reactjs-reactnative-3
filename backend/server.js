const express = require('express')
const mongoose = require('mongoose')

require('./models/initial-page')
require('./models/contacts')

const Home = mongoose.model('Initialpage')
const Contacts = mongoose.model('Contacts')

const app = express()
app.use(express.json())

const uri = "mongodb+srv://imersao3:imersao3@emunah.7fd8c.mongodb.net/imersao3?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((req, res) => {
    console.log("Conexão realizada com sucesso")
}).catch((err) => {
    console.log('Error: conexão não estabelecida: ' + err)
})


app.get('/content-home', async (req, res) => {
    await Home.findOne({}).then(home => {
        return res.json({
            error: false,
            home
        })
    }).catch(err => {
        return res.status(400).json({
            error: true,
            message: 'Ocorreu um erro ou não há registros cadastrado.'
        })
    })
})

app.post('/content-home', async (req, res) => {
    const existHome = await Home.findOne({})
    if (existHome) {
        return res.status(400).json({
            error: true,
            message: 'Conteúdo da página Home já cadastrado'
        })
    }

    await Home.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: 'error: Erro ao cadastrar conteúdo da home'
        })

        return res.json({
            error: false,
            message: 'Cadastro realizado com sucesso'
        })
    })
})

app.post('/contacts', async (req, res) => {
    await Contacts.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            messsage: 'Erro ao cadastrar os dados'
        })
    })
    return res.json({
        error: false,
        message: 'Dados cadastrados com sucesso'
    })
})

app.listen(3000, () => {
    console.log('Server running in port 3000 on address http://localhost:3000')
})
