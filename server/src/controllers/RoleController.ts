import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createRole, findRole, findRoles, updateRole, deleteRole } from '../services/RoleService';
import { createRoleSchema, findRolesSchema, findRoleSchema, updateRoleSchema, deleteRoleSchema } from '../validators/RoleValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_ROLE"]),
    checkBodyData(createRoleSchema),
    createRole
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findRolesSchema),
    findRoles
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findRoleSchema),
    findRole
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_ROLE"]),
    checkBodyData(updateRoleSchema),
    updateRole
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_ROLE"]),
    checkBodyData(deleteRoleSchema),
    deleteRole
);

module.exports = router;