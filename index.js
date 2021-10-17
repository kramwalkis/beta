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

app.post("/filteredShop", async (req, res) => {  
  let items = await shopDb.find();
  items = items.filter((item) => item.price <= req.body.price);
  items = items.filter((item) => item.maxStay >= req.body.maxStay);
  items = items.filter((item) => item.maxPerson >= req.body.maxPerson);
  items = items.filter((item) =>
    locationFiltering(req.body).includes(item.location)
  );
  items.length > 0
    ? res.send({ data: items })
    : res.send({
        data: false,
        message: "Atsiprašome, pagal Jūsų paieškos kriterijus, nieko neradome",
      });
});

function locationFiltering(data) {
  const returnArray = [];
  if (
    !data.location_Valkininkai &&
    !data.location_Vilnius &&
    !data.location_Kaunas
  ) {
    return ["Valkininkai", "Vilnius", "Kaunas"];
  } else {
    data.location_Valkininkai ? returnArray.push("Valkininkai") : null;
    data.location_Vilnius ? returnArray.push("Vilnius") : null;
    data.location_Kaunas ? returnArray.push("Kaunas") : null;
    return returnArray;
  }
}


