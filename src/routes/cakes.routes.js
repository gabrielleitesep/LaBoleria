import { Router } from "express";
import { postCakes } from "../controllers/cakes.controller.js";
import { cakesJOI } from "../schemas/cakes.schema.js";
import { validate } from "../middlewares/validator.middleware.js";

export const cakesRouter = Router();

cakesRouter.post("/cakes", validate(cakesJOI), postCakes);