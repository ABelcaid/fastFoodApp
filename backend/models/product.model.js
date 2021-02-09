const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
    nom: {
        type: String,
        required: true,
        trim: true,
    },
    prix: {
        type: Number,
        required: true,
       
    },
    ingrediens: {
        type: String,
        required: true,
        trim: true,
    },
   
    sousCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SousCategory'
    },

}, {
    versionKey: false
});

const ProductList = mongoose.model("Product", Product);
module.exports = ProductList;