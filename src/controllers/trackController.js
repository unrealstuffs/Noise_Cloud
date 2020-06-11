export const home = (req, res) => res.render("home");
export const search = (req, res) => res.send("search");
export const tracks = (req, res) => res.send("tracks");
export const upload = (req, res) => res.render("upload");
export const trackDetail = (req, res) => res.render("trackDetail");
export const editTrack = (req, res) => res.send("editTrack");
export const deleteTrack = (req, res) => res.send("deleteTrack");
