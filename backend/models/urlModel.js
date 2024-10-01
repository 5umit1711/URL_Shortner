import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    redirectURL: {
        type: String,
        required: true,
    }
})

const URL = mongoose.model("url", urlSchema);

export default URL;