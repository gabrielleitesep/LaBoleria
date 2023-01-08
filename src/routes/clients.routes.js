import { Router } from "express";
import { postClients, getClientsOrders } from "../controllers/clients.controller.js";

export const clientsRouter = Router();

clientsRouter.post("/clients", postClients);
clientsRouter.get("/clients/:id/orders", getClientsOrders);