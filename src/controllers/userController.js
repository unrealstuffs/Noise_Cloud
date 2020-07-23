import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Регистрация" });
};

export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, password2 },
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Регистрация" });
    } else {
        try {
            const user = await User({
                avatarUrl: req.files.userAvatar[0].location,
                imageUrl: req.files.userImage[0].location,
                name,
                email,
            });
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "Войти" });
};

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home,
});

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user).populate("tracks");
        res.render("userDetail", { pageTitle: user.name, user });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const userDetail = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        const user = await User.findById(id).populate("tracks");
        res.render("userDetail", { pageTitle: user.name, user });
    } catch (error) {
        console.log(error)
        res.redirect(routes.home);
    }
};

export const getEditProfile = (req, res) => {
    res.render("editProfile", { pageTitle: "Редактирование профиля" });
};

export const postEditProfile = async (req, res) => {
    const {
        body: { name, email },
    } = req;
    try {
        await User.findByIdAndUpdate(req.user.id, {
            name,
            email,
        });
        res.redirect(routes.me);
    } catch (error) {
        console.log(error);
        res.redirect(routes.editProfile);
    }
}

export const getChangePassword = (req, res) => {
    res.render("changePassword", { pageTitle: "Сменить пароль" });
}

export const postChangePassword = async (req, res) => {
    const {
        body: { oldPassword, newPassword, newPassword1 }
    } = req;

    try {
        if (newPassword !== newPassword1)  {
            res.status(400);
            res.redirect(`/users/${routes.changePassword}`);
            return;
        }
        await req.user.changePassword(oldPassword, newPassword);
        res.redirect(routes.me);
    } catch (error) {
        res.status(400);
        res.redirect(`/users/${routes.changePassword}`);
    }
}
