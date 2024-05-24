const Joi = require('joi');

export const createThreadCommentReactionSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required(),
});

export const findThreadCommentReactionsSchema = Joi.object({

});

export const findThreadCommentReactionSchema = Joi.object({

});

export const updateThreadCommentReactionSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});

export const deleteThreadCommentReactionSchema = Joi.object({

});