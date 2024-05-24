import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createUserRole, findUserRole, findUserRoles, updateUserRole, deleteUserRole } from '../services/UserRoleService';
import { createUserRoleSchema, findUserRolesSchema, findUserRoleSchema, updateUserRoleSchema, deleteUserRoleSchema } from '../validators/UserRoleValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_USER_ROLE", "CREATE_OWN_USER_ROLE"]),
    checkBodyData(createUserRoleSchema),
    createUserRole
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_ROLE", "FIND_OWN_USER_ROLE"]),
    checkBodyData(findUserRolesSchema),
    findUserRoles
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_ROLE", "FIND_OWN_USER_ROLE"]),
    checkBodyData(findUserRoleSchema),
    findUserRole
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_USER_ROLE", "UPDATE_OWN_USER_ROLE"]),
    checkBodyData(updateUserRoleSchema),
    updateUserRole
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_USER_ROLE", "DELETE_OWN_USER_ROLE"]),
    checkBodyData(deleteUserRoleSchema),
    deleteUserRole
);

module.exports = router;