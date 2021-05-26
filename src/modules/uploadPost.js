import { ADD_POST_OBJ_MUTATION, EDIT_PROFILE_OBJ_MUTATION } from "./queries.js";
import makeClient from "../client.js";
import { savePost, saveProfile } from "./savePost.js";

const addPostToDB = async ({ req }) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: ADD_POST_OBJ_MUTATION,
        variables: {
            title: req.body.title,
            categoryTitle: req.body.categoryTitle,
        },
    });
};

const editProfileToDB = async ({ req }) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: EDIT_PROFILE_OBJ_MUTATION,
        variables: {
            profileImage: req.body.profileImage,
        },
    });
};

export const uploadGeneralPost = async ({ req, res }) => {
    const { data } = await addPostToDB({ req });

    const { writePost: writePostResponse } = data;

    if (writePostResponse.postId === null) {
        return false;
    }

    const result = savePost({ dirName: writePostResponse.postId, req, res });

    return result;
};

export const uploadGeneralProfile = async ({ req, res }) => {
    const { data } = await editProfileToDB({ req });

    const { editProfile: editProfileResponse } = data;

    const result = saveProfile({
        dirName: editProfileResponse.profileImageId,
        req,
        res,
    });

    return result;
};
