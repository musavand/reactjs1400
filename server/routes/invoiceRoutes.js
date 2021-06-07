const Router = require("express").Router();
const DataBase = require("../models/invoice");

Router.get("/allInvoices", async (req, res) => {
  try {
    const data = await DataBase.find();
    res.json(data);
  } catch (err) {
    res.send(err);
  }
});
Router.post("/newInvoice", async (req, res) => {
  const reqItem = {
    productName: req.body.productName,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    amount: req.body.amount,
  };
  try {
    const newInvoice = new DataBase(reqItem);
    const newItem = await newInvoice.save();
    res.json(newItem);
  } catch (err) {
    res.send(err);
  }
});

Router.delete("/deleteInvoices/:id", async (req, res) => {
  const deleteInvoice = await DataBase.findById(req.params.id);
  DataBase.deleteOne(deleteInvoice)
    .then((res) => {
      console.log(res.deletedCount);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = Router;
