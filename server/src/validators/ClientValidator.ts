const Joi = require('joi');

export const createClientSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    redirectUri: Joi.string().uri().required(),
});

export const findClientsSchema = Joi.object({

});

export const findClientSchema = Joi.object({

});

export const updateClientSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    redirectUri: Joi.string().uri().required(),
});

export const deleteClientSchema = Joi.object({

});