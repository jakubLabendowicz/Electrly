const Joi = require('joi');

export const createClientScopeSchema = Joi.object({
    clientId: Joi.number().required(),
    scopeId: Joi.number().required(),
});

export const findClientScopesSchema = Joi.object({

});

export const findClientScopeSchema = Joi.object({

});

export const updateClientScopeSchema = Joi.object({
    clientId: Joi.number().required(),
    scopeId: Joi.number().required(),
});

export const deleteClientScopeSchema = Joi.object({

});