const Joi = require('joi');

export const createUserSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    nickname: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().lowercase().required(),
    phone: Joi.string().min(9).max(14).required(),
    gender: Joi.string().required(),
});

export const findUsersSchema = Joi.object({

});

export const findUserSchema = Joi.object({

});

export const updateUserSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    nickname: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().lowercase().required(),
    phone: Joi.string().min(9).max(14).required(),
    gender: Joi.string().required(),
});

export const deleteUserSchema = Joi.object({

});

export const verifyUserSchema = Joi.object({
    code: Joi.string().required()
});

export const deactiveUserSchema = Joi.object({
    code: Joi.string().required()
});