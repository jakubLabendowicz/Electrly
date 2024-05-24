const Joi = require('joi');

export const createUserAccessTokenSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(5).required()
});

export const refreshUserAccessTokenSchema = Joi.object({

});

export const findUserAccessTokenSchema = Joi.object({

});

export const deactivateUserAccessTokenSchema = Joi.object({

});