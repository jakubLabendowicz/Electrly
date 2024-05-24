import { Router } from 'express';
const bodyParser = require("body-parser");
const cors = require('cors');
const useragent = require('express-useragent');
const { handleError, handleNotFound } = require("../middlewares/ErrorMiddleware");


const userController = require("../controllers/UserController");
const userEmailNotificationController = require("../controllers/UserEmailNotificationController");
const userPasswordCodeController = require("../controllers/UserPasswordCodeController");
const userPasswordController = require("../controllers/UserPasswordController");
const userVerificationCodeController = require("../controllers/UserVerificationCodeController");
const userDeactivationCodeController = require("../controllers/UserDeactivationCodeController");
const userAuthenticationController = require("../controllers/UserAuthenticationController");
const userRoleController = require("../controllers/UserRoleController");
const userRouter = Router()
    .use("/users", userController)
    .use("/emailNotifications", userEmailNotificationController)
    .use("/passwordCodes", userPasswordCodeController)
    .use("/passwords", userPasswordController)
    .use("/verificationCodes", userVerificationCodeController)
    .use("/deactivationCodes", userDeactivationCodeController)
    .use("/auth", userAuthenticationController)
    .use("/roles", userRoleController);


const clientController = require("../controllers/ClientController");
const clientAuthorizationController = require("../controllers/ClientAuthorizationController");
const clientScopeController = require("../controllers/ClientScopeController");
const clientAllowedScopeController = require("../controllers/ClientAllowedScopeController");
const clientRouter = Router()
    .use("/clients", clientController)
    .use("/oauth", clientAuthorizationController)
    .use("/scopes", clientScopeController)
    .use("/allowedScopes", clientAllowedScopeController);


const permissionController = require("../controllers/PermissionController");
const permissionRouter = Router()
    .use("/permissions", permissionController);


const roleController = require("../controllers/RoleController");
const rolePermissionController = require("../controllers/RolePermissionController");
const roleRouter = Router()
    .use("/roles", roleController)
    .use("/permissions", rolePermissionController);


const scopeController = require("../controllers/ScopeController");
const scopePermissionController = require("../controllers/ScopePermissionController");
const scopeRouter = Router()
    .use("/scopes", scopeController)
    .use("/permissions", scopePermissionController);

const threadController = require("../controllers/ThreadController");
const threadReactionController = require("../controllers/ThreadReactionController");
const threadCommentController = require("../controllers/ThreadCommentController");
const threadCommentReactionController = require("../controllers/ThreadCommentReactionController");
const threadCategoryController = require("../controllers/ThreadCategoryController");
const threadRouter = Router()
    .use("/threads", threadController)
    .use("/reactions", threadReactionController)
    .use("/comments", threadCommentController)
    .use("/commentReactions", threadCommentReactionController)
    .use("/categories", threadCategoryController);


const routes = Router()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors())
    .use(useragent.express())
    .use("/u", userRouter)
    .use("/c", clientRouter)
    .use("/p", permissionRouter)
    .use("/r", roleRouter)
    .use("/s", scopeRouter)
    .use("/t", threadRouter)
    .use(handleError)
    .use("*", handleNotFound);
  
export default routes;