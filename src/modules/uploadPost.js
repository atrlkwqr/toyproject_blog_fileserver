import {ADD_POST_OBJ_MUTATION} from "./queries.js";
import makeClient from "../client.js"
import savePost from "./savePost.js"


const addPostToDB = async ({req}) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: ADD_POST_OBJ_MUTATION,
        variables: {
            title: req.body.title,
            categoryTitle: req.body.categoryTitle
        }
    });
}

export const uploadGeneralPost = async ({req, res}) => {

    const {data} = await addPostToDB({req});

    
    const {
        writePost: writePostResponse
    } = data;

    if (writePostResponse.postId === null) {
        return false;
    }

    const result = savePost({dirName: writePostResponse.postId, req, res});

    return result;

};
