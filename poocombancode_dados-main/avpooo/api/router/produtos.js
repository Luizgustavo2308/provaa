const express = require("express");
const router = express.Router();

const produtosController = require("../controllers/produtos")

router.get('/', (req, res)=> {
    produtosController.getALL(req, res);
})

router.post('/', (req, res)=> {
    produtosController.create(req, res);
})

router.put('/:id', (req, res)=> {
    produtosController.update(req, res);
})

router.delete('/:id', (req, res)=> {
    produtosController.delete(req, res);
})

module.exports=router;