import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/trackController";
import {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout,
    getMe,
} from "../controllers/userController";
import { onlyPublic, uploadUser } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, uploadUser, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

globalRouter.get(routes.me, getMe);

export default globalRouter;
