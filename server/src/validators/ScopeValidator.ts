const Joi = require('joi');

export const createScopeSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required(),
});

export const findScopesSchema = Joi.object({

});

export const findScopeSchema = Joi.object({

});

export const updateScopeSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});

export const deleteScopeSchema = Joi.object({

});