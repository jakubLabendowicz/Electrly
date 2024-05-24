import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createClientAllowedScope, findClientAllowedScope, findClientAllowedScopes, updateClientAllowedScope, deleteClientAllowedScope } from '../services/ClientAllowedScopeService';
import { createClientAllowedScopeSchema, findClientAllowedScopesSchema, findClientAllowedScopeSchema, updateClientAllowedScopeSchema, deleteClientAllowedScopeSchema } from '../validators/ClientAllowedScopeValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_CLIENT_ALLOWED_SCOPE", "CREATE_OWN_CLIENT_ALLOWED_SCOPE"]),
    checkBodyData(createClientAllowedScopeSchema),
    createClientAllowedScope
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_CLIENT_ALLOWED_SCOPE", "FIND_OWN_CLIENT_ALLOWED_SCOPE"]),
    checkBodyData(findClientAllowedScopesSchema),
    findClientAllowedScopes
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_CLIENT_ALLOWED_SCOPE", "FIND_OWN_CLIENT_ALLOWED_SCOPE"]),
    checkBodyData(findClientAllowedScopeSchema),
    findClientAllowedScope
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_CLIENT_ALLOWED_SCOPE", "UPDATE_OWN_CLIENT_ALLOWED_SCOPE"]),
    checkBodyData(updateClientAllowedScopeSchema),
    updateClientAllowedScope
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_CLIENT_ALLOWED_SCOPE", "DELETE_OWN_CLIENT_ALLOWED_SCOPE"]),
    checkBodyData(deleteClientAllowedScopeSchema),
    deleteClientAllowedScope
);

module.exports = router;