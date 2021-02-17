const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
    nom: {
        type: String,
        required: true,
       
    },
    prix: {
        type: Number,
        required: true,
       
    },

    pointfidelite: {
        type: Number,
        required: true,
       
    },

    ingrediens: {
        type: String,
        required: true,
    },
<<<<<<< HEAD

    img: {
        type: String,
        required: true,
        trim: true,
    },
   
=======
    img: {
        type: String,
        required: true,
    },

    points: {
        type: Number,
        required: true,
      
    },
>>>>>>> 2416134464b3e07891f6886a8ce1ee1744fc8f31
    sousCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SousCategory'
    },

}, {
    versionKey: false
});

const ProductList = mongoose.model("Product", Product);
module.exports = ProductList;