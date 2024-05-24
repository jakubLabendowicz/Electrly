import express, { Request, Response, NextFunction, Router } from 'express';
const { checkAuthorization, checkPermissions, checkUserId, checkBodyData, showMiddlewareData } = require("../middlewares/CheckMiddleware");
import { createClient, findClient, findClients, updateClient, deleteClient } from '../services/ClientService';
import { createClientSchema, findClientsSchema, findClientSchema, updateClientSchema, deleteClientSchema } from '../validators/ClientValidator';

const router: Router = express.Router();

router.post("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["CREATE_ANY_CLIENT"]),
    checkBodyData(createClientSchema),
    createClient
);

router.get("/",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_CLIENT"]),
    checkBodyData(findClientsSchema),
    findClients
);

router.get("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["FIND_ANY_CLIENT"]),
    checkBodyData(findClientSchema),
    findClient
);

router.patch("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["UPDATE_ANY_CLIENT"]),
    checkBodyData(updateClientSchema),
    updateClient
);

router.delete("/:id",
    checkAuthorization(["CLIENT_ACCESS_TOKEN"]),
    checkPermissions(["DELETE_ANY_CLIENT"]),
    checkBodyData(deleteClientSchema),
    deleteClient
);

module.exports = router;