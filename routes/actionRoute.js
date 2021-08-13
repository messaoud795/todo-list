const express = require("express");
const {
  action_list,
  create_action,
  update_action,
  delete_action,
} = require("../controllers/actionController");
const {
  validate,
  actionValidationRules,
} = require("../validation/actionValidator");

const actionValidator = require("../validation/actionValidator");
const router = express.Router();

//get all actions
router.get("/", action_list);

//create a new action
router.post("/add", actionValidationRules(), validate, create_action);

//update an action
router.patch("/edit", update_action);

//delete an action
router.delete("/delete/:id", delete_action);

module.exports = router;
