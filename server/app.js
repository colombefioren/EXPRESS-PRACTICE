const express = require("express");
const app = express();
const charactersRouter = require("./routes/characters.routes");

app.use(express.json());
app.use("/characters", charactersRouter);

module.exports = app;
