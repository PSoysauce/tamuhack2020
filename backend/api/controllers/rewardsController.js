"use strict";

var Customer = require("../models/Customer");
var Item = require("../models/Item");

exports.getAllCusts = function(req, res) {
  Customer.find({}, function(err, cust) {
    if (err) res.send(err);
    res.json(cust);
  });
};

exports.getAllItems = function(req, res) {
  Item.find({}, function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.addCust = function(req, res) {
  var newCust = new Customer(req.body);
  newCust.save(function(err, cust) {
    if (err) res.send(err);
    res.json(cust);
  });
};

exports.addItem = function(req, res) {
  var newItem = new Item(req.body);
  newItem.save(function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.getCust = function(req, res) {
  Customer.findById(req.params.custId, function(err, cust) {
    if (err) res.send(err);
    res.json(cust);
  });
};

exports.getItem = function(req, res) {
  Customer.findById(req.params.itemId, function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.updCust = function(req, res) {
  Customer.findOneAndUpdate(
    { _id: req.params.custId },
    req.body,
    { new: true },
    function(err, cust) {
      if (err) res.send(err);
      res.json(cust);
    }
  );
};

exports.updItem = function(req, res) {
  Item.findOneAndUpdate(
    { _id: req.params.itemId },
    req.body,
    { new: true },
    function(err, item) {
      if (err) res.send(err);
      res.json(item);
    }
  );
};

exports.delCust = function(req, res) {
  Customer.remove({ _id: req.params.custId }, function(err, task) {
    if (err) res.send(err);
    res.json({ message: "Customer deleted" });
  });
};

exports.delItem = function(req, res) {
  Customer.remove({ _id: req.params.itemId }, function(err, item) {
    if (err) res.send(err);
    res.json({ message: "Item deleted" });
  });
};
