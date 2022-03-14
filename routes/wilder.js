import express from "express"; 
import wilderController from "./../controllers/wilder";
import { wilderValidation } from "./../validations";

const router = express.Router(); 

router.post(
    "/create",
    wilderValidation.create,
    wilderController.create
  );
  
  router.get("/", wilderController.find);
  router.delete("/delete/:id", wilderController.delete); 
  router.put("/update/:id",  wilderValidation.create, wilderController.update); 

  export default router; 