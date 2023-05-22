const express = require("express");
const ejs = require("ejs");
const axios = require("axios");
const stock = require("live-stock-price");

const server = express();
server.set("view-engine", ejs);
const PORT = 1337;

server.get("/", (req, res) => {
  res.render("home.ejs");
});

server.get("/answer", (req, res) => {
  const company = req.query.company;
  stock.getStock(company, (error, stockInfo)=> {
    if (error) {
      console.error(error);
    }else{
        const stockPrice=stockInfo.currentPrice;
        res.render("answer.ejs", { company, stock: stockPrice });
    }
   
  });
});

server.listen(PORT, () =>
  console.log(`now serving on http://localhost${PORT}`)
);
