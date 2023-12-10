const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(3).max(12).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .required(),
});
module.exports = { addSchema };
