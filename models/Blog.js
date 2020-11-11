const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  titre: String,
  auteur: String,
  date_creation: Number,
  description: String,
  content: String,
  tags: Array,
  related: Array,
  comments: Array,
});

mongoose.model("Blogs", blogSchema);
