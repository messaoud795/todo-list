const { body, validationResult } = require("express-validator");

//validation rule to add an action to the db
const actionValidationRules = () => {
  return [
    body("name").isLength({ min: 5 }),
    body("description").isLength({ min: 10 }),
    body("completionDate").isISO8601().toDate(),
    body("person").isLength({ min: 3 }),
  ];
};

//send an error in res if error are found in the validations rules else proceed with this req
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).send({
    errors: extractedErrors,
  });
};

module.exports = {
  actionValidationRules,
  validate,
};
