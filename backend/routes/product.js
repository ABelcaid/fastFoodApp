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
    const img = req.body.img;

    // calcule d pint de fidelite 

    let points = 0

    if (prix >= 7 && prix <= 20) {

      points = 5;
      
    } else if(prix >= 21 && prix <= 50) {

      points = 12;

    }else {
      points = 20;
    }
    const ingrediens = req.body.ingrediens;
    const sousCategory = req.body.sousCategory;
<<<<<<< HEAD
    const pointfidelite = req.body.pointfidelite;
    const img = req.body.img;
  
=======


    // calucle point de fidelite 

    

  console.log(  nom,
    prix,
    ingrediens,
    img,
    points,
    sousCategory);
   
>>>>>>> 2416134464b3e07891f6886a8ce1ee1744fc8f31
   
  
    const productPush = new Product({
       
      nom,
      prix,
      ingrediens,
<<<<<<< HEAD
      sousCategory,
      pointfidelite,
      img
=======
      img,
      points,
      sousCategory
>>>>>>> 2416134464b3e07891f6886a8ce1ee1744fc8f31

     
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