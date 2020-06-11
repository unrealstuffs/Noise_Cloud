import routes from "../routes";
import Track from "../models/Track";

export const home = async (req, res) => {
    try {
        const tracks = await Track.find({});
        res.render("home", { pageTitle: "Главная", tracks });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Главная", tracks: [] });
    }
};

export const search = (req, res) => res.render("search");

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Загрузить" });
};

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path },
    } = req;
    const newTrack = await Track.create({
        fileUrl: path,
        title,
        description,
    });
    res.redirect(routes.trackDetail(newTrack.id));
};

export const trackDetail = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        const track = await Track.findById(id);
        res.render("trackDetail", { pageTitle: track.title, track });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const editTrack = (req, res) => res.send("editTrack");
export const deleteTrack = (req, res) => res.send("deleteTrack");
