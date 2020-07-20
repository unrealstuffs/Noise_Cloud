import routes from "../routes";
import Track from "../models/Track";
import Comment from "../models/Comment";
import mp3Duration from "mp3-duration";

export const home = async (req, res) => {
    try {
        const tracks = await Track.find({}).populate("creator");
        res.render("home", { pageTitle: "Главная", tracks });
    } catch (error) {
        res.render("home", { pageTitle: "Главная", tracks: [] });
    }
};

export const search = async (req, res) => {
    const {
        query: { term: searchingBy },
    } = req;
    let tracks = [];
    try {
        tracks = await Track.find({
            title: { $regex: searchingBy, $options: "i" },
        });
    } catch (error) {}
    res.render("search", { pageTitle: "Поиск", searchingBy, tracks });
};

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Загрузить" });
};

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
    } = req;

    mp3Duration(req.files.trackFile[0].path, async (err, duration) => {
        if (err) {
            return console.log(err.message);
        } else {
            const newTrack = await Track.create({
                fileUrl: req.files.trackFile[0].path,
                imageUrl: req.files.trackImage[0].path,
                title,
                description,
                duration,
                creator: req.user.id
            });
            req.user.tracks.push(newTrack.id);
            req.user.save();
            res.redirect(routes.trackDetail(newTrack.id));
        }
    })
};

export const trackDetail = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        const track = await Track.findById(id)
            .populate("creator")
            .populate({ path: "comments", populate: { path: "author" } });
        res.render("trackDetail", { pageTitle: track.title, track });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const getEditTrack = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        const track = await Track.findById(id);
        res.render("editTrack", {
            pageTitle: `Редактирование ${track.title}`,
            track,
        });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const postEditTrack = async (req, res) => {
    const {
        params: { id },
        body: { title, description },
    } = req;
    try {
        await Track.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.trackDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const deleteTrack = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        await Track.findOneAndRemove({ _id: id });
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
};

export const postRegisterListen = async (req, res) => {
    const {
        params: { id }
    } = req;

    try {
        const track = await Track.findById(id);
        track.listen++;
        track.save();
        res.status(200);
    } catch (error) {
        res.status(400);
    } finally {
        res.end();
    }
}

export const postAddComment = async (req, res) => {
    const {
        params: { id },
        body: { text },
        user
    } = req;
    try {
        const track = await Track.findById(id);
        const newComment = await Comment.create({
          text,
          author: user.id
        });
        track.comments.push(newComment.id);
        track.save();
    } catch (error) {
        console.log(error);
        res.status(400);
    } finally {
        res.end();
    }
}