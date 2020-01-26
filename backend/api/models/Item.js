"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: {
    type: String
  },

  pic: {
    type: String
  },

  price: {
    type: Number
  },

  category: {
    type: [
      {
        type: String,
        enum: ["snacks", "drinks", "comfort"]
      }
    ],
    default: ["snacks"]
  }
});

module.exports = mongoose.model("Item", ItemSchema);
