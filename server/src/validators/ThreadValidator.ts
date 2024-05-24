const Joi = require('joi');

export const createThreadSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required(),
});

export const findThreadsSchema = Joi.object({

});

export const findThreadSchema = Joi.object({

});

export const updateThreadSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});

export const deleteThreadSchema = Joi.object({

});