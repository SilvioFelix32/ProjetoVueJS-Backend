const express = require('express')
const cors = require('cors')
//Cors citado neste post é responsável por fornecer ao Express um middleware que permite lidar com requisições externas.
module.exports = app => {
    app.use(express.json())
    app.use(cors())
}