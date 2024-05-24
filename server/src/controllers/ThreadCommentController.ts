import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createThreadComment, findThreadComment, findThreadComments, updateThreadComment, deleteThreadComment } from '../services/ThreadCommentService';
import { createThreadCommentSchema, findThreadCommentsSchema, findThreadCommentSchema, updateThreadCommentSchema, deleteThreadCommentSchema } from '../validators/ThreadCommentValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["CREATE_ANY_ROLE"]),
    checkBodyData(createThreadCommentSchema),
    createThreadComment
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findThreadCommentsSchema),
    findThreadComments
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findThreadCommentSchema),
    findThreadComment
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["UPDATE_ANY_ROLE"]),
    checkBodyData(updateThreadCommentSchema),
    updateThreadComment
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["DELETE_ANY_ROLE"]),
    checkBodyData(deleteThreadCommentSchema),
    deleteThreadComment
);

module.exports = router;