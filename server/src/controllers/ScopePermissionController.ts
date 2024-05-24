import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createScopePermission, findScopePermission, findScopePermissions, updateScopePermission, deleteScopePermission } from '../services/ScopePermissionService';
import { createScopePermissionSchema, findScopePermissionsSchema, findScopePermissionSchema, updateScopePermissionSchema, deleteScopePermissionSchema } from '../validators/ScopePermissionValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_SCOPE_PERMISSION"]),
    checkBodyData(createScopePermissionSchema),
    createScopePermission
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_SCOPE_PERMISSION"]),
    checkBodyData(findScopePermissionsSchema),
    findScopePermissions
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_SCOPE_PERMISSION"]),
    checkBodyData(findScopePermissionSchema),
    findScopePermission
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_SCOPE_PERMISSION"]),
    checkBodyData(updateScopePermissionSchema),
    updateScopePermission
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_SCOPE_PERMISSION"]),
    checkBodyData(deleteScopePermissionSchema),
    deleteScopePermission
);

module.exports = router;