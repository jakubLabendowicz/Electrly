const Joi = require('joi');

export const createThreadCategorySchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required(),
});

export const findThreadCategoriesSchema = Joi.object({

});

export const findThreadCategorySchema = Joi.object({

});

export const updateThreadCategorySchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});

export const deleteThreadCategorySchema = Joi.object({

});