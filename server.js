const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    // response é a resposta do Axios, porém realizo a desestruturação e tiro o data de dentro do response
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    //   console.log(data);
    return res.json(data);

    //   return res.json([{ name: "Pedro" }, { name: "Henrique" }]);
  } catch (error) {
    console.log(error);
  }
});

app.listen("4567");
console.log("Em execução...");
