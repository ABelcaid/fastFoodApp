const express = require('express')
let Table = require('../models/table.model');
const router = express.Router();

<<<<<<< HEAD



router.get('/', (req,res) =>{
  
    Table.find()
  .then((Table) => res.json(Table))
  .catch((err) => res.status(400).json("Error :" + err));
//   res.render('index', {
                  
    
//  });

});




router.route("/add").post((req, res) => {
  const numTable = req.body.numTable;
=======
// show all Codepromo


router.get('/', (req,res) =>{

    Table.find()
  .then((Table) => res.json(Table))
  .catch((err) => res.status(400).json("Error :" + err));
});


// add category

router.route("/add").post((req, res) => {
  const numTable = req.body.numTable;
  const isOcuped = req.body.isOcuped;
  
>>>>>>> 2416134464b3e07891f6886a8ce1ee1744fc8f31

  
   
  
<<<<<<< HEAD
    const tablePush = new Table({
      
     numTable
     
    });
  
   tablePush
      .save()
      .then(() => res.json("Category successfully added"))
      .catch((err) =>  res.status(400).json("Error :" + err));
      res.redirect('/table')
  });


=======
    const TablePush = new Table({
      
        numTable,
        isOcuped

     
    });
  
    TablePush
      .save()
      .then(() => res.json("Table successfully added"))
      .catch((err) =>  res.status(400).json("Error :" + err));
      
  });



router.route("/update/:numTable").put((req, res) => {


    
  
    Table.updateOne({numTable: req.params.numTable}, {isOcuped : true})
    .then(() => res.status(201).json("table updated "))
    .catch((err) =>  res.status(400).json("Error :" + err));
})


>>>>>>> 2416134464b3e07891f6886a8ce1ee1744fc8f31
  


module.exports = router;