const express = require("express");
const router = express.Router();
const productsModel = require("../models/products");
const fs = require('fs')
const middleware = require('../middlewares/products')
// const productsModel = require(COMPLETE_O_CAMINHO); TODO

// GET - /products
router.get("/", function (req, res) {
  const productsData = productsModel.getProducts();

  res.render("products", {
    title: "Pagina de produtos",
    productsData: productsData,
  });
});

// Desafio: Ao cadastrar adicionar no arquivo .txt

fs.writeFileSync('productsList.txt', '')

var data = new Date()
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()
var hour = data.getHours()
var min = data.getMinutes()

data = dia + '/' + mes + '/' + ano + ' ' + hour + ':' + min 

// Post - /products
router.post("/", middleware.log, middleware.validacao, function (req, res) {
  const newProduct = req.body;

  productsModel.insertProduct(newProduct);

  fs.appendFileSync('productsList.txt', '\n' + newProduct.title + ' ' +  data + '  Operação de Cadastro');
  res.redirect("/products");
});
  
module.exports = router;
