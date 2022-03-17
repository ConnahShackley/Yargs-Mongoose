const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  actor: {
    type: String,
    default: "Not specified",
  },
  bio: {
  type: String,
  default: "Bio not available" ,
  },
  release_date: {
    type: String,
    default:"Release date not availble",
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;