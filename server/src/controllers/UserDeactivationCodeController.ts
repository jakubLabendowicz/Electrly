import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createUserDeactivationCode, findUserDeactivationCodes, findUserDeactivationCode, updateUserDeactivationCode, deleteUserDeactivationCode } from '../services/UserDeactivationCodeService';
import { createUserDeactivationCodeSchema, findUserDeactivationCodesSchema, findUserDeactivationCodeSchema, updateUserDeactivationCodeSchema, deleteUserDeactivationCodeSchema } from '../validators/UserDeactivationCodeValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_USER_DEACTIVATION_CODE", "CREATE_OWN_USER_DEACTIVATION_CODE"]),
    checkBodyData(createUserDeactivationCodeSchema),
    createUserDeactivationCode
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_DEACTIVATION_CODE", "FIND_OWN_USER_DEACTIVATION_CODE"]),
    checkBodyData(findUserDeactivationCodesSchema),
    findUserDeactivationCodes
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_DEACTIVATION_CODE", "FIND_OWN_USER_DEACTIVATION_CODE"]),
    checkBodyData(findUserDeactivationCodeSchema),
    findUserDeactivationCode
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_USER_DEACTIVATION_CODE", "UPDATE_OWN_USER_DEACTIVATION_CODE"]),
    checkBodyData(updateUserDeactivationCodeSchema),
    updateUserDeactivationCode
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_USER_DEACTIVATION_CODE", "DELETE_OWN_USER_DEACTIVATION_CODE"]),
    checkBodyData(deleteUserDeactivationCodeSchema),
    deleteUserDeactivationCode
);

module.exports = router;