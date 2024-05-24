import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createThread, findThread, findThreads, updateThread, deleteThread } from '../services/ThreadService';
import { createThreadSchema, findThreadsSchema, findThreadSchema, updateThreadSchema, deleteThreadSchema } from '../validators/ThreadValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["CREATE_ANY_ROLE"]),
    checkBodyData(createThreadSchema),
    createThread
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findThreadsSchema),
    findThreads
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findThreadSchema),
    findThread
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["UPDATE_ANY_ROLE"]),
    checkBodyData(updateThreadSchema),
    updateThread
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["DELETE_ANY_ROLE"]),
    checkBodyData(deleteThreadSchema),
    deleteThread
);

module.exports = router;