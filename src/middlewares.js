import multer from "multer";
import routes from "./routes";

const multerTrack = multer({ dest: "uploads/tracks/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "NOISECLOUD";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1,
    };
    next();
};

export const uploadTrack = multerTrack.fields([
    { name: "trackFile" },
    { name: "trackImage" },
]);
