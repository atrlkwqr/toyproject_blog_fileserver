import { gql } from "@apollo/client";

export const ADD_POST_OBJ_MUTATION = gql`
    mutation writePost($categoryTitle: String, $title: String) {
        writePost(title: $title, categoryTitle: $categoryTitle) {
            ok
            postId
        }
    }
`;

export const EDIT_PROFILE_OBJ_MUTATION = gql`
    mutation editProfile($profileImage: String) {
        editProfile(profileImage: $profileImage) {
            ok
            profileImageId
        }
    }
`;
