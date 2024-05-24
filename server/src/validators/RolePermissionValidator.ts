const Joi = require('joi');

export const createRolePermissionSchema = Joi.object({
    roleId: Joi.number().required(),
    permissionId: Joi.number().required(),
});

export const findRolePermissionsSchema = Joi.object({
    
});

export const findRolePermissionSchema = Joi.object({
        
});

export const updateRolePermissionSchema = Joi.object({
    roleId: Joi.number().required(),
    permissionId: Joi.number().required(),
});

export const deleteRolePermissionSchema = Joi.object({
        
});