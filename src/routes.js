// Global routes
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users routes
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// Tracks routes
const TRACKS = "/tracks";
const UPLOAD = "/upload";
const TRACK_DETAIL = "/:id";
const EDIT_TRACK = "/:id/edit";
const DELETE_TRACK = "/:id/delete";

// API
const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    me: ME,
    tracks: TRACKS,
    upload: UPLOAD,
    trackDetail: (id) => {
        if (id) {
            return `/tracks/${id}`;
        } else {
            return TRACK_DETAIL;
        }
    },
    editTrack: (id) => {
        if (id) {
            return `/tracks/${id}/edit`;
        } else {
            return EDIT_TRACK;
        }
    },
    deleteTrack: (id) => {
        if (id) {
            return `/tracks/${id}/delete`;
        } else {
            return DELETE_TRACK;
        }
    },
    api: API,
    registerView: REGISTER_VIEW,
    addComment: ADD_COMMENT
};

export default routes;
