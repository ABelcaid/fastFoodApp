const express = require('express')
let Codepromo = require('../models/codepromo.model');
const router = express.Router();

// show all Codepromo


router.get('/', (req,res) =>{

  Codepromo.find()
  .then((Codepromo) => res.json(Codepromo))
  .catch((err) => res.status(400).json("Error :" + err));
});


// add category

router.route("/add").post((req, res) => {
  const nom = req.body.nom;
  const isValid = req.body.isValid;
  const product = req.body.product;

  
   
  
    const CodepromoPush = new Codepromo({
      
      nom,
      isValid,
      product

     
    });
  
    CodepromoPush
      .save()
      .then(() => res.json("Category successfully added"))
      .catch((err) =>  res.status(400).json("Error :" + err));
      res.redirect('/Codepromo')
  });


  


module.exports = router;