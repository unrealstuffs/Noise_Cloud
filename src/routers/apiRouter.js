import express from "express";
import routes from "../routes";
import {
  postRegisterListen,
  postAddComment
} from "../controllers/trackController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterListen);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
