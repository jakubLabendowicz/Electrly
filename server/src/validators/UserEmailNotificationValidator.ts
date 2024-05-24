const Joi = require('joi');

export const createUserEmailNotificationSchema = Joi.object({
    userId: Joi.number().required(),
    emailNotificationId: Joi.number().required(),
});

export const findUserEmailNotificationsSchema = Joi.object({
        
});

export const findUserEmailNotificationSchema = Joi.object({
                
});

export const updateUserEmailNotificationSchema = Joi.object({
    userId: Joi.number().required(),
    emailNotificationId: Joi.number().required(),
});

export const deleteUserEmailNotificationSchema = Joi.object({
                        
});