const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const keys = require("./config/keys");
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const mongoose = require("mongoose");
require("./models/Blog");

mongoose.connect("mongodb://localhost:27017", () => {
    console.log("connected");
    const BlogsRoutes = require("./routes/blogs");

app.use("/blogs", BlogsRoutes);

app.listen(5000, function() {
    console.log("Server started on port 5000");
});
});

