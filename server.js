// const express = require("express") ES5

import express from "express"; //ES6
import mongoose from "mongoose";
import wilderController from "./controllers/wilder";
import { wilderValidation } from "./validations";
import dotenv from "dotenv"; 

dotenv.config();

const app = express();
const port = 3000;

mongoose
  .connect(process.env.MONGO_URI, {autoIndex: true})
  .then(() => console.log("Connecté à la BDD"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true })); //middleware éxécuté avant la requête
app.use(express.json());

app.post(
  "/api/wilder/create",
  wilderValidation.create,
  wilderController.create
);
//app.get("/", method.find);
//app.delete("/api/wilder/:id", method.delete); 
//app.put("/api/wilder/:id", method.update); 
app.listen(port, () => console.log("serveur is listening on port 3000"));
