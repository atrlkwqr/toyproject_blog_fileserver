import express from "express";
import multer from "multer";
import {
    uploadGeneralPost,
    uploadGeneralProfile,
} from "./modules/uploadPost.js";
import cors from "cors";
import fs from "fs-extra";
import path from "path";

var port = 5000;

var app = express();

app.use(express.static("uploads"));

const corsOptions = {
    exposedHeaders: "Content-Disposition",
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, "file" + Date.now() + path.extname(file.originalname));
    },
});

const uploadMulter = multer({
    storage: storage,
    limits: {
        fileSize: 100 * 1024 * 1024,
    },
});

app.post("/uploads", uploadMulter.single("streamfile"), async (req, res) => {
    const result = await uploadGeneralPost({ req, res });
    if (result === true) {
        res.status(200).json({ text: "Success to upload" });
    } else {
        res.status(500).json({ text: "Fail to upload process" });
    }
});

app.post("/profile", uploadMulter.single("streamfile"), async (req, res) => {
    const result = await uploadGeneralProfile({ req, res });
    if (result === true) {
        res.status(200).json({ text: "Success to upload" });
    } else {
        res.status(500).json({ text: "Fail to upload process" });
    }
});

app.get("/l/:postId", async (req, res) => {
    try {
        const postId = req.params.postId;

        const dirPath = `uploads/${postId}`;
        if (fs.existsSync(dirPath)) {
            const postName = fs.readdirSync(dirPath)[0];
            const postPath = path.join(dirPath, postName);

            res.download(postPath, postName, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("download success");
                }
            });
        } else {
            console.log("There is no file");
            res.status(500).json({ text: "error" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ text: "Error" });
    }
});

app.get("/p/:profileId", async (req, res) => {
    try {
        const profileId = req.params.profileId;

        const dirPath = `profile/${profileId}`;

        if (fs.existsSync(dirPath)) {
            const profileName = fs.readdirSync(dirPath)[0];
            const profilePath = path.join(dirPath, profileName);

            res.download(profilePath, profileName, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("download success");
                }
            });
        } else {
            console.log("There is no file");
            res.status(500).json({ text: "error" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ text: "Error" });
    }
});

app.listen(port, function () {
    console.log("✅ Server running on http://localhost:" + port);
});
