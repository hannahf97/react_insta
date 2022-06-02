import { useState } from "react";
import "./ProfileBoard.css";
import ProfileBoardDetail from "./ProfileBoardDetail";
const ProfileBoard = ({ posts, name, img, deletePost }) => {
  console.log(img);
  const [isOpen, setIsOpen] = useState(false);
  const [clickPost, setClickPost] = useState();
  const openModal = (post) => {
    setClickPost(post);
    setIsOpen(true);
  };
  const closeModal = () => {
    setClickPost();
    setIsOpen(false);
  };

  const onClickDelete = (postId) => {
    deletePost(postId);
    closeModal();
  };

  return (
    <div className="profileBoard">
      {posts?.map((data) => (
        <div className="profileBoardImgBox" onClick={() => openModal(data)}>
          <img
            className="profileBoardImg"
            key={data.id}
            src={data.img}
            alt={data.content}
          ></img>
        </div>
      ))}
      <ProfileBoardDetail
        name={name}
        img={img}
        isOpen={isOpen}
        clickPost={clickPost}
        closeModal={closeModal}
        onClickDelete={onClickDelete}
      ></ProfileBoardDetail>
    </div>
  );
};
export default ProfileBoard;
