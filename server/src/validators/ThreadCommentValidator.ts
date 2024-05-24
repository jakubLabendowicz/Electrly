const Joi = require('joi');

export const createThreadCommentSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required(),
});

export const findThreadCommentsSchema = Joi.object({

});

export const findThreadCommentSchema = Joi.object({

});

export const updateThreadCommentSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});

export const deleteThreadCommentSchema = Joi.object({

});