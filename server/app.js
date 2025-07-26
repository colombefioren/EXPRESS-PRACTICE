import express from "express";
import charactersRouter from "./routes/characters.routes.js";

const app = express();

app.use(express.json());
app.use("/characters", charactersRouter);

export default app;
