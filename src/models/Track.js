import mongoose from "mongoose";

const TrackSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required",
    },
    imageUrl: {
        type: String,
        required: "Image URL is required",
    },
    title: {
        type: String,
        required: "Title is requires",
    },
    description: String,
    listen: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const model = mongoose.model("Track", TrackSchema);
export default model;
