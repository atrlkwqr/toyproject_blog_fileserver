import {gql} from "@apollo/client";

export const ADD_POST_OBJ_MUTATION = gql`
  mutation writePost(
    $categoryTitle: String
    $title: String
    ){
      writePost(
      title:$title
      categoryTitle:$categoryTitle
    ){
      ok,
      postId
    }
  }
`;