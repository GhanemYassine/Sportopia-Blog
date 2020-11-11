const mongoose = require("mongoose");
const { Schema } = mongoose;

const auteursSchema = new Schema({
    idCoach: String,
    nom: String,
    prenom: String,
});

mongoose.model("Auteurs", auteursSchema);