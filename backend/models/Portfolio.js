const mongoose = require("mongoose");
const slug = require('slug');

//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const portfolioShema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  slug:{
    type: String,
    required: true,
    unique: true,
    default: function(){return slug(this.title)}
  },
  description: {
    type: String,
    required: true,
  },
   image:{
    type: String,
    required: true
  }, 
  createdAt: {
    type: Date,
    default: Date.now()
}
});

module.exports = mongoose.model("portfolio", portfolioShema);
