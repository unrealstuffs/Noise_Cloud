import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    trackDetail,
    editTrack,
    deleteTrack,
} from "../controllers/trackController";
import { uploadTrack } from "../middlewares";

const trackRouter = express.Router();

trackRouter.get(routes.upload, getUpload);
trackRouter.post(routes.upload, uploadTrack, postUpload);
trackRouter.get(routes.trackDetail(), trackDetail);
trackRouter.get(routes.editTrack, editTrack);
trackRouter.get(routes.deleteTrack, deleteTrack);

export default trackRouter;
