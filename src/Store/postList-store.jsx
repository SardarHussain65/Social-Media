import { createContext, useReducer } from "react";
// import PostList from "../Components/PostList";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostlist, action) => {
  let newPostList = currPostlist;
  if (action.type === "DELETE_POST") {
    newPostList = currPostlist.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostlist];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: tags,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Skardu",
    body: "Skardu is the one of the best city in the world in term of peace , beauty and other.",
    reaction: 11,
    userId: "user-6",
    tags: ["vacation", "enjoying"],
  },
  {
    id: "2",
    title: "Buy phone",
    body: "Iphone is best for buy because it have more feature for using it has best camera and it also have best seccurity.",
    reaction: 3,
    userId: "user-9",
    tags: ["Selling", "Markiting", "Learning"],
  },
];

export default PostListProvider;
