import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    trackDetail,
    getEditTrack,
    postEditTrack,
    deleteTrack,
} from "../controllers/trackController";
import { uploadTrack } from "../middlewares";

const trackRouter = express.Router();

trackRouter.get(routes.upload, getUpload);
trackRouter.post(routes.upload, uploadTrack, postUpload);

trackRouter.get(routes.trackDetail(), trackDetail);

trackRouter.get(routes.editTrack(), getEditTrack);
trackRouter.post(routes.editTrack(), uploadTrack, postEditTrack);

trackRouter.get(routes.deleteTrack(), deleteTrack);

export default trackRouter;
