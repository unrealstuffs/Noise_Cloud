import express from "express";
import routes from "../routes";
import {
    tracks,
    upload,
    trackDetail,
    editTrack,
    deleteTrack,
} from "../controllers/trackController";

const trackRouter = express.Router();

trackRouter.get(routes.tracks, tracks);
trackRouter.get(routes.upload, upload);
trackRouter.get(routes.trackDetail(), trackDetail);
trackRouter.get(routes.editTrack, editTrack);
trackRouter.get(routes.deleteTrack, deleteTrack);

export default trackRouter;
