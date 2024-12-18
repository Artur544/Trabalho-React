const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')

const router = express.Router()
router.get('/produto/:id',ProdutoController.buscaProduto)
router.get('/produtos',ProdutoController.listarProdutos)
router.post('/produto',ProdutoController.criarProduto)
router.delete('/produto/:id', ProdutoController.deletarProduto)
router.patch('/produto/:id',ProdutoController.atualizarProduto)
//pesquisa
router.get('/produtoMaiorquantidade',ProdutoController.quantidadeProduto)
router.get('/produtoMaiorvalor',ProdutoController.valorProduto)
router.get('/produtoValorTotal',ProdutoController.valorTotalProduto)

module.exports = router
