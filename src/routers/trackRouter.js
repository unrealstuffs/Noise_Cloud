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
import { uploadTrack, onlyPrivate } from "../middlewares";

const trackRouter = express.Router();

trackRouter.get(routes.upload, onlyPrivate, getUpload);
trackRouter.post(routes.upload, onlyPrivate, uploadTrack, postUpload);

trackRouter.get(routes.trackDetail(), trackDetail);

trackRouter.get(routes.editTrack(), onlyPrivate, getEditTrack);
trackRouter.post(routes.editTrack(), onlyPrivate, uploadTrack, postEditTrack);

trackRouter.get(routes.deleteTrack(), onlyPrivate, deleteTrack);

export default trackRouter;
