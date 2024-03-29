import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/postList-store";
const Post = ({post}) => {
  const {deletePost}=useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "80%" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> deletePost(post.id)}>
        <MdDelete />
    <span class="visually-hidden">unread messages</span>
  </span></h5>
        <p className="card-text">
        {post.body}
        </p>
        {post.tags.map((tag)=>
        <span className="badge text-bg-primary hagstag" key={tag}>{tag}</span>
        
        )}
       <div className="alert alert-success rections" role="alert">
  This Post has been reacted by {post.reaction} people.
</div>
      </div>
    </div>
  );
};

export default Post;
