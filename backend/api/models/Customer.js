"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  points: {
    type: Number
  }
});

module.exports = mongoose.model("Customer", CustomerSchema);
