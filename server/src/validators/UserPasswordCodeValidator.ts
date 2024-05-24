const Joi = require('joi');

export const createUserPasswordCodeSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
});

export const findUserPasswordCodesSchema = Joi.object({
        
});

export const findUserPasswordCodeSchema = Joi.object({
                
});

export const updateUserPasswordCodeSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
});

export const deleteUserPasswordCodeSchema = Joi.object({
                    
});