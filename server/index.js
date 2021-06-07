const express = require("express");
const app = express();
const cors = require("cors");
const invoiceRoutes = require("./routes/invoiceRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log("Mongodb Up");
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", invoiceRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server Is UP");
});
