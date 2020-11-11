const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    auteur: String,
    date_creation: Number,
    content: String,
});

mongoose.model("Comments", commentSchema);