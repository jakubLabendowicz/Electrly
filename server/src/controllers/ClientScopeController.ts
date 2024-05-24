import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createClientScope, findClientScope, findClientScopes, updateClientScope, deleteClientScope } from '../services/ClientScopeService';
import { createClientScopeSchema, findClientScopesSchema, findClientScopeSchema, updateClientScopeSchema, deleteClientScopeSchema } from '../validators/ClientScopeValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_CLIENT_SCOPE"]),
    checkBodyData(createClientScopeSchema),
    createClientScope
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_CLIENT_SCOPE"]),
    checkBodyData(findClientScopesSchema),
    findClientScopes
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_CLIENT_SCOPE"]),
    checkBodyData(findClientScopeSchema),
    findClientScope
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_CLIENT_SCOPE"]),
    checkBodyData(updateClientScopeSchema),
    updateClientScope
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_CLIENT_SCOPE"]),
    checkBodyData(deleteClientScopeSchema),
    deleteClientScope
);

module.exports = router;