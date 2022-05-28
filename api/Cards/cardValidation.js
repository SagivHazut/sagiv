const Joi = require("joi");

function validateCard(card) {
  const schema = Joi.object({
    title: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(3).max(1024).required(),
    price: Joi.string().min(2).max(14).required(),
    image: Joi.string().min(11).max(256),
  });
  return schema.validate(card);
}
exports.validateCard = validateCard;
