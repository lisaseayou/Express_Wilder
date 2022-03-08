import mongoose from "mongoose"; 

const Schema = mongoose.Schema; 

const WilderSchema = new Schema({
    name : { //forme longe
        type: String, 
        required : [true, "vous devez saisir un nom"]
    }, 
    city : {
        type: String, 
        required: [true, "vous devez saisir une ville"]
    }, //forme courte
    skills: [{ //Chaque skills pourra contenir un titre de type string et les votes de type number
        title : String,
        votes: Number
    }]
},
{versionKey: false},

); 

export default mongoose.model("wilder", WilderSchema)


// Faire en sorte que depuis le schéma de mongoose, 
//le "name" soit obligatoire et personnaliser le message.

// Ensuite, s'entrainer avec express-validator pour faire en sorte que le "name"
//soit au moins de 4 caractères
