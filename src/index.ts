import dotenv from "dotenv";
import express, { Express } from "express";

import timelogMiddleware from "./middlewares/timelogMiddleware";
import userRouteV1 from "./routes/v1/userRoute";
import { API_PREPEND } from "./configs/generalConfig";

dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(timelogMiddleware.timelog); // example middleware to log date time of request

app.use(`${API_PREPEND}/v1/users`, userRouteV1.router);

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
