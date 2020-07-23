import express from "express";
import routes from "../routes";
import {
    userDetail,
    getEditProfile,
    postEditProfile,
    getChangePassword,
    postChangePassword
} from "../controllers/userController";
import { onlyPrivate, uploadUser } from "../middlewares";

const userRouter = express.Router();


userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadUser, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
