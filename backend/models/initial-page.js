const mongoose = require('mongoose')

const Schema = mongoose.Schema

const initialPage = new Schema({
    /**
     * CONTEÚDO DO TOPO DA PÁGINA HOME
     */
    topTitle: {
        type: String
    },
    topSubTitle: {
        type: String
    },
    topTextBtn: {
        type: String
    },
    topLinkBtn: {
        type: String
    },

    /**
     * CONTEÚDO DO MEIO DA PÁGINA HOME SESSÃO SERVIÇOS
     */
    middleTitle: {
        type: String
    },
    middleSubTitle: {
        type: String
    },

    // CONTEÚDO DO PRIMEIRO ÍCONE
    middleOneIcon: {
        type: String
    },
    middleOneTitle: {
        type: String
    },
    middleOneDescription: {
        type: String
    },

    // CONTEÚDO DO SEGUNDO ÍCONE
    middleTwoIcon: {
        type: String
    },
    middleTwoTitle: {
        type: String
    },
    middleTwoDescription: {
        type: String
    },

    // CONTEÚDO DO TERCEIRO ÍCONE
    middleThreeIcon: {
        type: String
    },
    middleThreeTitle: {
        type: String
    },
    middleThreeDescription: {
        type: String
    }
}, {
    timestamps: true
})

mongoose.model('Initialpage', initialPage)