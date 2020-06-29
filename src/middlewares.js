import multer from "multer";
import routes from "./routes";

const multerTrack = multer({ dest: "uploads/tracks/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "NOISECLOUD";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    next();
};

export const onlyPublic = (req, res, next) => {
    if (req.user) {
        res.redirect(routes.home);
    } else {
        next();
    }
};

export const onlyPrivate = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
};

export const uploadTrack = multerTrack.fields([
    { name: "trackFile" },
    { name: "trackImage" },
]);
