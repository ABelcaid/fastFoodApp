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


// router.get('/:idSousCtg', (req,res) =>{

//   Product.find({sousCategory: `${req.params.idSousCtg}`})
//   .then((Product) => res.json(Product))
//   .catch((err) => res.status(400).json("Error :" + err));
// });


router.route("/add").post((req, res) => {
    const nom = req.body.nom;
    const prix = req.body.prix;
    const ingrediens = req.body.ingrediens;
    const sousCategory = req.body.sousCategory;
    const pointfidelite = req.body.pointfidelite;
    const img = req.body.img;
  
   
  
    const productPush = new Product({
      
      nom,
      prix,
      ingrediens,
      sousCategory,
      pointfidelite,
      img

     
    });
  
    productPush
      .save()
      .then(() => res.json("Product successfully added"))
      .catch((err) =>  res.status(400).json("Error :" + err));
  });


  router.route("/:id").get((req, res) => {

    console.log(req.params.id);
    Product.findById(req.params.id)
        .then((Product) => res.json(Product))
        .catch((err) => res.status(400).json("Error :" + err));
});
  


router.route("/:id").put((req, res) => {
  Product.findById(req.params.id)
      .then((cat) => {
          cat.nom = req.body.nom;
          cat.prix = req.body.prix;
          cat.ingrediens = req.body.ingrediens;
          cat.sousCategory = req.body.sousCategory;
          cat.pointfidelite = req.body.pointfidelite;
          cat.img = req.body.img;
         
         

          cat
              .save()
              .then(() => res.json("product successfully updated"))
              .catch((err) => res.status(400).json("Error :" + err));
      })
      .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/delete/:id").delete((req, res) => {

  console.log(req.params.id);
  Product.findByIdAndRemove(req.params.id)
      .then(() => res.json("product successfully deleted"))
      .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;