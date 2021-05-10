import {gql} from "@apollo/client";

export const ADD_POST_OBJ_MUTATION = gql`
  mutation writePost(
    $contents: String
    $title: String
    ){
      writePost(
      title:$title
      contents:$contents
    ){
      ok,
      postId
    }
  }
`;