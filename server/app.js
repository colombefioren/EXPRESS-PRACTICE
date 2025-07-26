import express from "express";
import charactersRouter from "./routes/characters.routes.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/characters", charactersRouter);

export default app;
