import express from "express";
import multer from "multer";
import {uploadGeneralPost} from "./modules/uploadPost.js";
import deletePost from "./modules/deletePost.js"
import cors from "cors";

var port = 5000;

var app = express();

app.use(express.static("uploads"));

const corsOptions = {
    exposedHeaders: "Content-Disposition",
    origin: 'http://localhost:3000'
  };

app.use(cors(corsOptions));

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, "file" + Date.now() + path.extname(file.originalname));
    }
});

const uploadMulter = multer({
    storage: storage,
    limits: {
        fileSize: 100 * 1024 * 1024
    }
});


app.post("/uploads", uploadMulter.single("streamfile"), async (req, res) => {


    const result = await uploadGeneralPost({req, res});
    if (result === true) {
        res
            .status(200)
            .json({text: "Success to upload"});
    } else {
        res
            .status(500)
            .json({text: "Fail to upload process"});
    }
});

app.listen(port, function () {
    console.log('✅ Server running on http://localhost:' + port);
});

