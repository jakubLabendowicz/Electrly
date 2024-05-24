import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createScope, findScope, findScopes, updateScope, deleteScope } from '../services/ScopeService';
import { createScopeSchema, findScopesSchema, findScopeSchema, updateScopeSchema, deleteScopeSchema } from '../validators/ScopeValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_SCOPE"]),
    checkBodyData(createScopeSchema),
    createScope
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_SCOPE"]),
    checkBodyData(findScopesSchema),
    findScopes
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_SCOPE"]),
    checkBodyData(findScopeSchema),
    findScope
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_SCOPE"]),
    checkBodyData(updateScopeSchema),
    updateScope
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_SCOPE"]),
    checkBodyData(deleteScopeSchema),
    deleteScope
);

module.exports = router;