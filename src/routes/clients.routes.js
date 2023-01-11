import { Router } from "express";
import { postClients, getClientsOrders } from "../controllers/clients.controller.js";
import { clientsJOI } from "../schemas/clients.schema.js";
import { validate } from "../middlewares/validator.middleware.js";

export const clientsRouter = Router();

clientsRouter.post("/clients", validate(clientsJOI), postClients);
clientsRouter.get("/clients/:id/orders", getClientsOrders);