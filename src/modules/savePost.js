import fs from "fs-extra";

const savePost = ({
    dirName,
    req
    }) => {

    try{
        const dirPath = `./uploads/${dirName}`;
        fs.mkdirSync(dirPath);
        fs.writeFile(dirPath + "/" + req.body.title + ".html", req.body.streamfile);

        return true;
    } catch(err){
        console.log(err);
        return false;
    }
  }


  export default savePost;