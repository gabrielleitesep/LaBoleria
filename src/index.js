import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { cakesRouter } from "./routes/cakes.routes.js";
import { clientsRouter } from "./routes/clients.routes.js";
import { ordersRouter } from "./routes/orders.routes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cakesRouter);
app.use(clientsRouter);
app.use(ordersRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`Está rodando na porta ${port}!`));