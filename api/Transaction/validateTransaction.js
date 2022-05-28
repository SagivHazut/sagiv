const Joi = require("joi");

function validateTransaction(transaction) {
  const schema = Joi.object({ id: Joi.string().min(2).max(256).required() });
  return schema.validate(transaction);
}
exports.validateTransaction = validateTransaction;
