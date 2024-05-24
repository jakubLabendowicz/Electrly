const Joi = require('joi');

export const createUserRoleSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
});

export const findUserRolesSchema = Joi.object({
        
});

export const findUserRoleSchema = Joi.object({
                
});

export const updateUserRoleSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
});

export const deleteUserRoleSchema = Joi.object({
                    
});