import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createUserPasswordCode, findUserPasswordCodes, findUserPasswordCode, updateUserPasswordCode, deleteUserPasswordCode } from '../services/UserPasswordCodeService';
import { createUserPasswordCodeSchema, findUserPasswordCodesSchema, findUserPasswordCodeSchema, updateUserPasswordCodeSchema, deleteUserPasswordCodeSchema } from '../validators/UserPasswordCodeValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization([]),
    checkPermissions([]),
    checkBodyData(createUserPasswordCodeSchema),
    createUserPasswordCode
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_PASSWORD_CODE", "FIND_OWN_USER_PASSWORD_CODE"]),
    checkBodyData(findUserPasswordCodesSchema),
    findUserPasswordCodes
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_PASSWORD_CODE", "FIND_OWN_USER_PASSWORD_CODE"]),
    checkBodyData(findUserPasswordCodeSchema),
    findUserPasswordCode
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_USER_PASSWORD_CODE", "UPDATE_OWN_USER_PASSWORD_CODE"]),
    checkBodyData(updateUserPasswordCodeSchema),
    updateUserPasswordCode
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_USER_PASSWORD_CODE", "DELETE_OWN_USER_PASSWORD_CODE"]),
    checkBodyData(deleteUserPasswordCodeSchema),
    deleteUserPasswordCode
);

module.exports = router;