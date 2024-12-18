const express = require('express')
const ProprietarioController = require('../controllers/ProprietarioController')

const router = express.Router()
router.get('/proprietario/:id',ProprietarioController.buscaProprietario)
router.get('/proprietarios',ProprietarioController.listarProprietarios)
router.post('/proprietario',ProprietarioController.criarProprietarios)
router.delete('/proprietario/:id', ProprietarioController.deletarProprietario)
router.patch('/proprietario/:id',ProprietarioController.atualizarProprietario)
//pesquisas
router.get('/proprietario/nome/:nome',ProprietarioController.buscaNome)
router.get('/proprietario_produtos',ProprietarioController.proprietarioMaisProdutos)

module.exports = router
