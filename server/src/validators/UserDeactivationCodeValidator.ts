const Joi = require('joi');

export const createUserDeactivationCodeSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
});

export const findUserDeactivationCodesSchema = Joi.object({
        
});

export const findUserDeactivationCodeSchema = Joi.object({
                
});

export const updateUserDeactivationCodeSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
});

export const deleteUserDeactivationCodeSchema = Joi.object({
                    
});