const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contacts = new Schema({
    /**
     * CONTEÚDO DA PÁGINA CONTACTS
     */
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

mongoose.model('Contacts', contacts)