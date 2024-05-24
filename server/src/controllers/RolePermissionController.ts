import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createRolePermission, findRolePermission, findRolePermissions, updateRolePermission, deleteRolePermission } from '../services/RolePermissionService';
import { createRolePermissionSchema, findRolePermissionsSchema, findRolePermissionSchema, updateRolePermissionSchema, deleteRolePermissionSchema } from '../validators/RolePermissionValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_ROLE_PERMISSION"]),
    checkBodyData(createRolePermissionSchema),
    createRolePermission
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_ROLE_PERMISSION"]),
    checkBodyData(findRolePermissionsSchema),
    findRolePermissions
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_ROLE_PERMISSION"]),
    checkBodyData(findRolePermissionSchema),
    findRolePermission
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_ROLE_PERMISSION"]),
    checkBodyData(updateRolePermissionSchema),
    updateRolePermission
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_ROLE_PERMISSION"]),
    checkBodyData(deleteRolePermissionSchema),
    deleteRolePermission
);

module.exports = router;