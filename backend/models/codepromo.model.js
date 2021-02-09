const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Codepromo = new Schema(
  {
    nom: {
      type: String,
      required: true,
      trim: true,
      minlenght: 3,
    },
    isValid: {
        type: Boolean,
        default: true,
       
      },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
  },
  {
    versionKey: false
}
);

const CodepromoList = mongoose.model("Codepromo", Codepromo);
module.exports = CodepromoList;
