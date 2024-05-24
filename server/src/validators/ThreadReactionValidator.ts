const Joi = require('joi');

export const createThreadReactionSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required(),
});

export const findThreadReactionsSchema = Joi.object({

});

export const findThreadReactionSchema = Joi.object({

});

export const updateThreadReactionSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});

export const deleteThreadReactionSchema = Joi.object({

});