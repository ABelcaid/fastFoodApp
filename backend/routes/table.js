const express = require('express')
let Table = require('../models/table.model');
const router = express.Router();




router.get('/', (req,res) =>{
  
    Table.find()
  .then((Table) => res.json(Table))
  .catch((err) => res.status(400).json("Error :" + err));
//   res.render('index', {
                  
    
//  });

});




router.route("/add").post((req, res) => {
  const numTable = req.body.numTable;

  
   
  
    const tablePush = new Table({
      
     numTable
     
    });
  
   tablePush
      .save()
      .then(() => res.json("Category successfully added"))
      .catch((err) =>  res.status(400).json("Error :" + err));
      res.redirect('/table')
  });


  


module.exports = router;