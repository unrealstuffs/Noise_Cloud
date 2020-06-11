export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.send("logout");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.send("editProfile");
export const changePassword = (req, res) => res.send("changePassword");
