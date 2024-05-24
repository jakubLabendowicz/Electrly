import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createUser, findUser, findUsers, updateUser, deleteUser, deactiveUser, verifyUser } from '../services/UserService';
import { createUserSchema, findUsersSchema, findUserSchema, updateUserSchema, deleteUserSchema, deactiveUserSchema, verifyUserSchema } from '../validators/UserValidator';

const router: Router = express.Router();

router.post("/", 
    checkAuthorization([]),
    checkPermissions([]),
    checkBodyData(createUserSchema),
    createUser
);

router.get("/", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
    checkPermissions(["FIND_ANY_USER", "FIND_OWN_USER"]), 
    checkBodyData(findUsersSchema),
    showMiddlewareData,
    findUsers
);

router.get("/:uid", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    showMiddlewareData,
    checkPermissions(["FIND_ANY_USER", "FIND_OWN_USER"]), 
    showMiddlewareData,
    checkUserId, 
    showMiddlewareData,
    checkBodyData(findUserSchema),
    showMiddlewareData,
    findUser
);

router.patch("/:uid", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_USER", "UPDATE_OWN_USER"]),
    checkUserId, 
    checkBodyData(updateUserSchema), 
    updateUser
);

router.delete("/:uid", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_USER", "DELETE_OWN_USER"]),
    checkUserId, 
    checkBodyData(deleteUserSchema), 
    deleteUser
);

router.post("/:uid/deactive", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DEACTIVE_ANY_USER", "DEACTIVE_OWN_USER"]),
    checkUserId, 
    checkBodyData(deactiveUserSchema), 
    deactiveUser
);

router.post("/:uid/verify", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["VERIFY_ANY_USER", "VERIFY_OWN_USER"]),
    checkUserId, 
    checkBodyData(verifyUserSchema), 
    verifyUser
);

module.exports = router;