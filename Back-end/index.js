import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((err) => {
    console.log(err);
  });

import { cursosRouter } from "./routes/cursosRoutes.js";
import { usuarioRouter } from "./routes/usuarioRoutes.js";
import { formDudasRouter } from "./routes/formDudasController.js";

app.use("/api", cursosRouter);
app.use("/api", usuarioRouter);
app.use("/api", formDudasRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
