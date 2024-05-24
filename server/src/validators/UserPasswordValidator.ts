const Joi = require('joi');

export const createUserPasswordSchema = Joi.object({
    code: Joi.string().required(),
    password: Joi.string().required(),
});

export const findUserPasswordsSchema = Joi.object({
        
});

export const findUserPasswordSchema = Joi.object({
                
});

export const updateUserPasswordSchema = Joi.object({
    password: Joi.string().required(),
});

export const deleteUserPasswordSchema = Joi.object({
                    
});