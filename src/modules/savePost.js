import fs from "fs-extra";

export const savePost = ({ dirName, req }) => {
    try {
        const dirPath = `./uploads/${dirName}`;
        if (fs.existsSync(dirPath)) {
            fs.removeSync(dirPath);
        }
        fs.mkdirSync(dirPath);
        fs.writeFile(
            dirPath + "/" + req.body.title + ".html",
            req.body.streamfile
        );

        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const saveProfile = ({ dirName, req }) => {
    try {
        const dirPath = `./profile/${dirName}`;
        if (fs.existsSync(dirPath)) {
            fs.removeSync(dirPath);
        }
        fs.mkdirSync(dirPath);
        fs.writeFile(
            dirPath + "/profile.html",
            '<p><img src="' + req.body.streamfile + '" alt="image"></p>'
        );

        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
