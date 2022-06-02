import { useState } from "react";
import "./Post.css";
import PostDetail from "./PostDetail";
const Post = ({ posts, deletePost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickPost, setClickPost] = useState();
  const openModal = (post) => {
    setClickPost(post);
    setIsOpen(true);
  };
  const closeModal = () => {
    console.log("clicked");
    setClickPost();
    setIsOpen(false);
  };

  const onClickDelete = (postId) => {
    deletePost(postId);
    closeModal();
  };

  return (
    <div className="Posts">
      {posts?.map((data) => (
        <div className="PostsImgBox" onClick={() => openModal(data)}>
          <img
            className="PostsImg"
            key={data.id}
            src={data.img}
            alt={data.content}
          ></img>
        </div>
      ))}
      {clickPost ? (
        <PostDetail
          isOpen={isOpen}
          clickPost={clickPost}
          closeModal={closeModal}
          onClickDelete={onClickDelete}
        ></PostDetail>
      ) : null}
    </div>
  );
};
export default Post;
