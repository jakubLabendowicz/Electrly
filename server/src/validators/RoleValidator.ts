const Joi = require('joi');

export const createRoleSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required(),
});

export const findRolesSchema = Joi.object({

});

export const findRoleSchema = Joi.object({

});

export const updateRoleSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});

export const deleteRoleSchema = Joi.object({

});