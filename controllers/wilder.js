// create, read, update, delete
import WilderModel from "../models/Wilder";
import { listErrors } from "./../utilities/tools";

export default {
  create: (req, res, next) => {
    //post
    const { name, city, skills } = req.body;

    WilderModel.init().then(() => {
      const wilder = new WilderModel({
        name,
        city,
        skills,
      });
      wilder
        .save()
        .then((result) => {
          res.json({ success: true, result });
        })
        .catch((err) => {
          res.status(400).json({
            success: false,
            result: listErrors(err),
          });
        });
    });
  },

  find: (req, res) => {
    WilderModel.init().then(() => {
      WilderModel.find()
        .then((result) => {
          console.log("success", result);
          res.json({
            message: "good job",
            result: result,
          });
        })
        .catch((err) => console.log("erreur", err));
    });
  },
  delete: (req, res) => {
    const { id } = req.params;
    WilderModel.init().then(() => {
      WilderModel.deleteOne({ _id: id })
        .then((result) => {
          console.log("success", result);
          res.json({
            message: "wilder supprimé",
            result: result,
          });
        })
        .catch((err) => console.log("erreur", err));
    });
  },
  update: (req, res) => {
    console.log("ok");
    const { id } = req.params;
    WilderModel.init().then(() => {
      WilderModel.updateOne({ _id : id }, req.body)
        .then((result) => {
          console.log("success", result);
          res.json({
            message: "wilder modifié",
            result: result,
          });
        })
        .catch((err) => console.log("erreur", err.message));
    });
  },
};
