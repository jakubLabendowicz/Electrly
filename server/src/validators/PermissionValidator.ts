const Joi = require('joi');

export const createPermissionSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});

export const findPermissionsSchema = Joi.object({

});

export const findPermissionSchema = Joi.object({

});

export const updatePermissionSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});

export const deletePermissionSchema = Joi.object({

});