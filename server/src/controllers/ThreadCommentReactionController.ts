import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createThreadCommentReaction, findThreadCommentReaction, findThreadCommentReactions, updateThreadCommentReaction, deleteThreadCommentReaction } from '../services/ThreadCommentReactionService';
import { createThreadCommentReactionSchema, findThreadCommentReactionsSchema, findThreadCommentReactionSchema, updateThreadCommentReactionSchema, deleteThreadCommentReactionSchema } from '../validators/ThreadCommentReactionValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["CREATE_ANY_ROLE"]),
    checkBodyData(createThreadCommentReactionSchema),
    createThreadCommentReaction
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findThreadCommentReactionsSchema),
    findThreadCommentReactions
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findThreadCommentReactionSchema),
    findThreadCommentReaction
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["UPDATE_ANY_ROLE"]),
    checkBodyData(updateThreadCommentReactionSchema),
    updateThreadCommentReaction
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["DELETE_ANY_ROLE"]),
    checkBodyData(deleteThreadCommentReactionSchema),
    deleteThreadCommentReaction
);

module.exports = router;