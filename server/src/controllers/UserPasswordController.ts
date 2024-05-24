import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createUserPassword, findUserPassword, findUserPasswords, updateUserPassword, deleteUserPassword } from '../services/UserPasswordService';
import { createUserPasswordSchema, findUserPasswordsSchema, findUserPasswordSchema, updateUserPasswordSchema, deleteUserPasswordSchema } from '../validators/UserPasswordValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization([]),
    checkPermissions([]),
    checkBodyData(createUserPasswordSchema),
    createUserPassword
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_PASSWORD", "FIND_OWN_USER_PASSWORD"]),
    checkBodyData(findUserPasswordsSchema),
    findUserPasswords
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_PASSWORD", "FIND_OWN_USER_PASSWORD"]),
    checkBodyData(findUserPasswordSchema),
    findUserPassword
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_USER_PASSWORD", "UPDATE_OWN_USER_PASSWORD"]),
    checkBodyData(updateUserPasswordSchema),
    updateUserPassword
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_USER_PASSWORD", "DELETE_OWN_USER_PASSWORD"]),
    checkBodyData(deleteUserPasswordSchema),
    deleteUserPassword
);

module.exports = router;