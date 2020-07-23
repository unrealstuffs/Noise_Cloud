import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL_PROD, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to db");
const handleError = (error) =>
    console.log(`❌ Error on db connection ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
