const express = require('express')
// call my controller
const proprietariosRoutes = require('./routes/ProprietarioRoutes')

const produtosRoutes = require('./routes/ProdutoRoutes')

const cors = require('cors')

const app = express()

const port = 5000

app.use(express.json())

app.use(cors())

// routes
app.use('/api',proprietariosRoutes)

app.use('/api',produtosRoutes)

app.listen(port,()=>{
    console.log("Server running at port " + port)
})

