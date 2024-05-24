import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createUserEmailNotification, findUserEmailNotification, findUserEmailNotifications, updateUserEmailNotification, deleteUserEmailNotification } from '../services/UserEmailNotificationService';
import { createUserEmailNotificationSchema, findUserEmailNotificationsSchema, findUserEmailNotificationSchema, updateUserEmailNotificationSchema, deleteUserEmailNotificationSchema } from '../validators/UserEmailNotificationValidator';

const router: Router = express.Router();

router.post("/", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_USER_EMAIL_NOTIFICATION", "CREATE_OWN_USER_EMAIL_NOTIFICATION"]),
    checkBodyData(createUserEmailNotificationSchema), 
    createUserEmailNotification
);

router.get("/", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_USER_EMAIL_NOTIFICATION", "FIND_OWN_USER_EMAIL_NOTIFICATION"]),
    checkBodyData(findUserEmailNotificationsSchema),
    showMiddlewareData,
    findUserEmailNotifications
);

router.get("/:id", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
    checkPermissions(["FIND_ANY_USER_EMAIL_NOTIFICATION", "FIND_OWN_USER_EMAIL_NOTIFICATION"]),
    checkBodyData(findUserEmailNotificationSchema), 
    findUserEmailNotification
);

router.patch("/:id", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_USER_EMAIL_NOTIFICATION", "UPDATE_OWN_USER_EMAIL_NOTIFICATION"]),
    checkBodyData(updateUserEmailNotificationSchema), 
    updateUserEmailNotification
);

router.delete("/:id", 
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_USER_EMAIL_NOTIFICATION", "DELETE_OWN_USER_EMAIL_NOTIFICATION"]),
    checkBodyData(deleteUserEmailNotificationSchema), 
    deleteUserEmailNotification
);

// router.post("/:id/send", verifyUser, async (req:Request, res:Response, next:NextFunction) => {
//     sendUserEmailNotification(req, res).catch((error) => {
//         next(error);
//     });
// });

module.exports = router;