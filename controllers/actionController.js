const Action = require("../models/actionModel");

// get list of all actions.
exports.action_list = (req, res) => {
  Action.find({}, (err, data) => {
    if (err) res.status(500).send(err);
    else res.send(data);
  });
};

//create a new action
exports.create_action = async (req, res) => {
  try {
    const { name, description, person, completionDate } = req.body;
    const newAction = new Action({ name, description, person, completionDate });
    await newAction.save();
    res.status(200).send({ msg: "action created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error" });
  }
};

//update an action
exports.update_action = (req, res) => {
  Action.findByIdAndUpdate(
    req.body.id,
    { ...req.body },
    { new: true, runValidators: true },
    (err, data) => {
      if (err) res.status(500).send({ msg: "Server error" });
      else {
        res.status(200).send({ msg: "action updated successfully" });
      }
    }
  );
};

//delete an action
exports.delete_action = (req, res) => {
  Action.findByIdAndDelete(req.params.id, (err) => {
    if (err) res.status(500).send({ msg: "error" });
    else res.status(200).send({ msg: " action deleted successfully " });
  });
};
