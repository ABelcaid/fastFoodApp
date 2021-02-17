const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Table = new Schema(
  {
    numTable: {
      type: Number,
      required: true,
    },
    isOcuped: {
        type: Boolean,
        default : false,
    },
    
  },
  {
    versionKey: false
}
);

const TableList = mongoose.model("table", Table);
module.exports = TableList;
