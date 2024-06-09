import express, { Application } from "express";
import globalErrorHandaler from "./app/middlwares/globalErrorhandler";
import { UserRouter } from "./app/modul/user/user.router";
import notFound from "./app/middlwares/notFound";
import router from "./app/Routes";

const app: Application = express();

app.use(express.json());

app.use("/api/v1/", router);
//   app.use("/api/v1/user", Student.Routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandaler);

// Not Found
app.use(notFound);

export default app;
