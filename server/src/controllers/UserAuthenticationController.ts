import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createUserToken, refreshUserToken, findUserToken, deactivateUserToken } from '../services/UserAuthenticationService';
import { createUserAccessTokenSchema, refreshUserAccessTokenSchema, findUserAccessTokenSchema, deactivateUserAccessTokenSchema } from '../validators/UserAuthenticationValidator';

const router: Router = express.Router();

router.post("/authenticate",
    checkAuthorization([]),
    checkPermissions([]),
    checkBodyData(createUserAccessTokenSchema),
    createUserToken
);

router.post("/refresh",
    checkAuthorization(["USER_REFRESH_TOKEN"]), 
    checkPermissions([]),
    checkBodyData(refreshUserAccessTokenSchema),
    showMiddlewareData,
    refreshUserToken
);

router.post("/introspect",
    checkAuthorization(["USER_ACCESS_TOKEN", "USER_REFRESH_TOKEN"]), 
    checkPermissions([]),
    checkBodyData(findUserAccessTokenSchema),
    findUserToken
);

router.post("/revoke",
    checkAuthorization(["USER_ACCESS_TOKEN", "USER_REFRESH_TOKEN"]), 
    checkPermissions([]),
    checkBodyData(deactivateUserAccessTokenSchema),
    deactivateUserToken
);
module.exports = router;