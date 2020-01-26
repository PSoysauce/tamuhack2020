"use strict";
module.exports = function(app) {
  var rewardsApi = require("../controllers/rewardsController");

  //Rewards routes
  app
    .route("/cust")
    .get(rewardsApi.getAllCusts)
    .post(rewardsApi.addCust);

  app
    .route("/cust/:custId")
    .get(rewardsApi.getCust)
    .put(rewardsApi.updCust)
    .delete(rewardsApi.delCust);

  app
    .route("/item")
    .get(rewardsApi.getAllItems)
    .post(rewardsApi.addItem);

  app
    .route("/item/:itemId")
    .get(rewardsApi.getItem)
    .put(rewardsApi.updItem)
    .delete(rewardsApi.delItem);
};
