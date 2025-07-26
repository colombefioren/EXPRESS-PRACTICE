import express from "express";
import charactersRouter from "./routes/characters.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use("/characters", charactersRouter);
app.use(errorHandler);

export default app;
