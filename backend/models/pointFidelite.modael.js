const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PointFidelite = new Schema(
  {
    idClient: {
      type: String,
    },
    nbPoint :{
        type: Number,
       
    }
    
  },
  {
    versionKey: false
}
);

const PointFideliteList = mongoose.model("PointFidelite", PointFidelite);
module.exports = PointFideliteList;
