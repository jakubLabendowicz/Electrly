import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createThreadCategory, findThreadCategory, findThreadCategories, updateThreadCategory, deleteThreadCategory } from '../services/ThreadCategoryService';
import { createThreadCategorySchema, findThreadCategoriesSchema, findThreadCategorySchema, updateThreadCategorySchema, deleteThreadCategorySchema } from '../validators/ThreadCategoryValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["CREATE_ANY_ROLE"]),
    checkBodyData(createThreadCategorySchema),
    createThreadCategory
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findThreadCategoriesSchema),
    findThreadCategories
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["FIND_ANY_ROLE"]),
    checkBodyData(findThreadCategorySchema),
    findThreadCategory
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["UPDATE_ANY_ROLE"]),
    checkBodyData(updateThreadCategorySchema),
    updateThreadCategory
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    // checkPermissions(["DELETE_ANY_ROLE"]),
    checkBodyData(deleteThreadCategorySchema),
    deleteThreadCategory
);

module.exports = router;