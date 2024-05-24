import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { authorizeClientPasswordGrantType, authorizeClientCredentialsGrantType, authorizeClientCodeGrantType, refreshClientToken, findClientToken, deactivateClientToken } from '../services/ClientAuthorizationService';
const router: Router = express.Router();

const passwordRouter: Router = express.Router();
passwordRouter.use(
    authorizeClientPasswordGrantType
);

const clientCredentialsRouter: Router = express.Router();
clientCredentialsRouter.use(
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions([]),
    authorizeClientCredentialsGrantType
);

const codeRouter: Router = express.Router();
codeRouter.use(
    authorizeClientCodeGrantType
);

router.post("/authorize", 
    (req: Request, res: Response, next:NextFunction) => {
        if (req.body.data.grantType === "password") {
            passwordRouter(req, res, next);
        } else if (req.body.data.grantType === "client_credentials") {
            clientCredentialsRouter(req, res, next);
        } else if (req.body.data.grantType === "authorization_code") {
            codeRouter(req, res, next);
        }
    },
);

router.post("/refresh",
    checkAuthorization(["CLIENT_REFRESH_TOKEN"]),
    checkPermissions([]),
    // checkBodyData(), 
    showMiddlewareData,
    refreshClientToken
);

router.post("/introspect",
    checkAuthorization(["CLIENT_ACCESS_TOKEN", "CLIENT_REFRESH_TOKEN"]),
    checkPermissions([]),
    // checkBodyData(), 
    showMiddlewareData,
    findClientToken
);

router.post("/revoke",
    checkAuthorization(["CLIENT_ACCESS_TOKEN", "CLIENT_REFRESH_TOKEN"]),
    checkPermissions([]),
    // checkBodyData(),
    showMiddlewareData,
    deactivateClientToken
);

module.exports = router;