const express = require('express')
let Category = require('../models/category.model');
const router = express.Router();

// show all category 


router.get('/', (req,res) =>{
  
  Category.find()
  .then((category) => res.json(category))
  .catch((err) => res.status(400).json("Error :" + err));
//   res.render('index', {
                  
    
//  });

});


// add category

router.route("/add").post((req, res) => {
  const nom = req.body.nom;

  
   
  
    const categoryPush = new Category({
      
      nom
     
    });
  
    categoryPush
      .save()
      .then(() => res.json("Category successfully added"))
      .catch((err) =>  res.status(400).json("Error :" + err));
      res.redirect('/category')
  });



  router.route("/:id").get((req, res) => {
    Category.findById(req.params.id)
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json("Error :" + err));
});
  


router.route("/:id").put((req, res) => {
  Category.findById(req.params.id)
      .then((cat) => {
          cat.nom = req.body.nom;

          cat
              .save()
              .then(() => res.json("cat successfully updated"))
              .catch((err) => res.status(400).json("Error :" + err));
      })
      .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;