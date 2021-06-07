const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  productName: String,
  description: String,
  price: Number,
  quantity: Number,
  amount: Number,
});

const invoiceModel = mongoose.model("invoiceModel", invoiceSchema);

module.exports = invoiceModel;
