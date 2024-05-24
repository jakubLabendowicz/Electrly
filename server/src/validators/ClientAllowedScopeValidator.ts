const Joi = require('joi');

export const createClientAllowedScopeSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
});

export const findClientAllowedScopesSchema = Joi.object({
        
});

export const findClientAllowedScopeSchema = Joi.object({
                
});

export const updateClientAllowedScopeSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
});

export const deleteClientAllowedScopeSchema = Joi.object({
                    
});