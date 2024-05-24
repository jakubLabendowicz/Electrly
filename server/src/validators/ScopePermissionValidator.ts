const Joi = require('joi');

export const createScopePermissionSchema = Joi.object({
    scopeId: Joi.number().required(),
    permissionId: Joi.number().required(),
});

export const findScopePermissionsSchema = Joi.object({
    
});

export const findScopePermissionSchema = Joi.object({
            
});

export const updateScopePermissionSchema = Joi.object({
    scopeId: Joi.number().required(),
    permissionId: Joi.number().required(),
});

export const deleteScopePermissionSchema = Joi.object({
                
});