const Joi = require('joi');

export const createUserVerificationCodeSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
});

export const findUserVerificationCodesSchema = Joi.object({

});

export const findUserVerificationCodeSchema = Joi.object({

});

export const updateUserVerificationCodeSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
});

export const deleteUserVerificationCodeSchema = Joi.object({

});