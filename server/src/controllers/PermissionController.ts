import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createPermission, findPermission, findPermissions, updatePermission, deletePermission } from '../services/PermissionService';
import { createPermissionSchema, findPermissionsSchema, findPermissionSchema, updatePermissionSchema, deletePermissionSchema } from '../validators/PermissionValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_PERMISSION"]),
    checkBodyData(createPermissionSchema),
    createPermission
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_PERMISSION"]),
    checkBodyData(findPermissionsSchema),
    findPermissions
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_PERMISSION"]),
    checkBodyData(findPermissionSchema),
    findPermission
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_PERMISSION"]),
    checkBodyData(updatePermissionSchema),
    updatePermission
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_PERMISSION"]),
    checkBodyData(deletePermissionSchema),
    deletePermission
);

module.exports = router;