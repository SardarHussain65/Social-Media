import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/postList-store";

const PostList = () => {
  const { postlist } = useContext(PostListData);
  console.log(postlist);
  return (
    <>
      {postlist.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
