import dotenv from "dotenv";
import express, { Express } from "express";
import helmet from "helmet";

import { API_PREPEND } from "./configs/generalConfig";
import timelogMiddleware from "./middlewares/timelogMiddleware";
import userRouteV1 from "./routes/v1/userRoute";

dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;
const app: Express = express();

app.use(helmet()); // secure app by setting http response headers
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // parses urlencoded bodies with qs library

app.use(timelogMiddleware.timelog); // example middleware to log date time of request

app.use(`${API_PREPEND}/v1/users`, userRouteV1.router); // example router registered

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
