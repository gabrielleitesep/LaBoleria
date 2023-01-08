import { Router } from "express";
import { postCakes } from "../controllers/cakes.controller.js";

export const cakesRouter = Router();

cakesRouter.post("/cakes", postCakes);