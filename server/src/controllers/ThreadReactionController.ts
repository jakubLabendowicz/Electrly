import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createThreadReaction, findThreadReaction, findThreadReactions, updateThreadReaction, deleteThreadReaction } from '../services/ThreadReactionService';
import { createThreadReactionSchema, findThreadReactionsSchema, findThreadReactionSchema, updateThreadReactionSchema, deleteThreadReactionSchema } from '../validators/ThreadReactionValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["CREATE_ANY_ROLE"]),
    checkBodyData(createThreadReactionSchema),
    createThreadReaction
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findThreadReactionsSchema),
    findThreadReactions
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findThreadReactionSchema),
    findThreadReaction
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["UPDATE_ANY_ROLE"]),
    checkBodyData(updateThreadReactionSchema),
    updateThreadReaction
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["DELETE_ANY_ROLE"]),
    checkBodyData(deleteThreadReactionSchema),
    deleteThreadReaction
);

module.exports = router;