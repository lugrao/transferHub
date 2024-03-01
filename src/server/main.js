import express from "express";
import ViteExpress from "vite-express";
import router from "./routes/index.js";

const app = express();

app.use("/", router);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
