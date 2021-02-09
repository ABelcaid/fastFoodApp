const express = require('express')
let Product = require('../models/product.model');
const router = express.Router();

// show all Product 


router.get('/', (req,res) =>{

  Product.find()
  .then((Product) => res.json(Product))
  .catch((err) => res.status(400).json("Error :" + err));
});

// add Product 


router.get('/showAll', (req,res) =>{
    res.send('hi this is when we show all product ')
});


router.get('/:idSousCtg', (req,res) =>{

  Product.find({sousCategory: `${req.params.idSousCtg}`})
  .then((Product) => res.json(Product))
  .catch((err) => res.status(400).json("Error :" + err));
});


router.route("/add").post((req, res) => {
    const nom = req.body.nom;
    const prix = req.body.prix;
    const ingrediens = req.body.ingrediens;
    const sousCategory = req.body.sousCategory;

  
   
  
    const productPush = new Product({
      
      nom,
      prix,
      ingrediens,
      sousCategory

     
    });
  
    productPush
      .save()
      .then(() => res.json("Product successfully added"))
      .catch((err) =>  res.status(400).json("Error :" + err));
  });


module.exports = router;