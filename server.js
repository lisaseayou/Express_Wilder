// const express = require("express") ES5

import express from "express"; //ES6
import mongoose from "mongoose";
import dotenv from "dotenv"; 
import wilderRouter from "./routes/wilder"; 

dotenv.config();

const app = express();
const port = 3030;

mongoose
  .connect(`${process.env.MONGO_URI}`, {autoIndex: true})
  .then(() => console.log("Connecté à la BDD"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true })); //middleware éxécuté avant la requête
app.use(express.json());

 app.use("/api/wilder" , wilderRouter)
 
app.use((req, res) => {
  // res.send("Route qui n'existe pas", 404)
  res.status(404).send("Route qui n'existe pas");
});
app.listen(port, () => console.log(`"serveur is listening on port ${port}"`));
