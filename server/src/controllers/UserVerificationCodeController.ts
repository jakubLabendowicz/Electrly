import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createUserVerificationCode, findUserVerificationCodes, findUserVerificationCode, updateUserVerificationCode, deleteUserVerificationCode } from '../services/UserVerificationCodeService';
import { createUserVerificationCodeSchema, findUserVerificationCodesSchema, findUserVerificationCodeSchema, updateUserVerificationCodeSchema, deleteUserVerificationCodeSchema } from '../validators/UserVerificationCodeValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_USER_VERIFICATION_CODE", "CREATE_OWN_USER_VERIFICATION_CODE"]),
    checkBodyData(createUserVerificationCodeSchema),
    createUserVerificationCode
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_VERIFICATION_CODE", "FIND_OWN_USER_VERIFICATION_CODE"]),
    checkBodyData(findUserVerificationCodesSchema),
    findUserVerificationCodes
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_VERIFICATION_CODE", "FIND_OWN_USER_VERIFICATION_CODE"]),
    checkBodyData(findUserVerificationCodeSchema),
    findUserVerificationCode
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_USER_VERIFICATION_CODE", "UPDATE_OWN_USER_VERIFICATION_CODE"]),
    checkBodyData(updateUserVerificationCodeSchema),
    updateUserVerificationCode
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_USER_VERIFICATION_CODE", "DELETE_OWN_USER_VERIFICATION_CODE"]),
    checkBodyData(deleteUserVerificationCodeSchema),
    deleteUserVerificationCode
);

module.exports = router;