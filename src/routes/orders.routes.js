import { Router } from "express";
import { postOrder, getOrders, getOrdersId } from "../controllers/orders.controller.js";
import { ordersJOI } from "../schemas/orders.schema.js";
import { validate } from "../middlewares/validator.middleware.js";

export const ordersRouter = Router();

ordersRouter.post("/order", validate(ordersJOI), postOrder);
ordersRouter.get("/orders", getOrders);
ordersRouter.get("/orders/:id", getOrdersId);