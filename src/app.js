import express from "express";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import trackRouter from "./routers/trackRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.tracks, trackRouter);

export default app;
