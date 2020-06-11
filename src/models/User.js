import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    backgroundUrl: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    tracks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Track",
        },
    ],
});

const model = mongoose.model("User", UserSchema);
export default model;
