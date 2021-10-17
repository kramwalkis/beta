const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const shopDb = require("./schema/shopSchema");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening");
});

mongoose
  .connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((e) => {
    console.log(e);
    console.log("Error while connecting to DB");
  });

 

app.get("/getShop", async (req, res) => {
  let items = await shopDb.find();
  items
    ? res.send({ success: true, items: items })
    : res.send({ success: false, message: "something went wrong" });
});
