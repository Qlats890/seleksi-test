import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().positive().required(),
  description: Joi.string().required(),
});

export {
  productSchema
}