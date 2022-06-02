import { useContext } from "react";
import { Button, Container, Modal } from "reactstrap";
import { UserContext } from "../../store/UserContext";
import ProfileBody from "../Profile/ProfileBody";
import "./PostDetail.css";

const PostDetail = ({ isOpen, clickPost, closeModal, onClickDelete }) => {
  const { users } = useContext(UserContext);
  const getUser = () => {
    return users.find((user) => user.id === clickPost.userId);
  };
  const user = getUser();
  const myId = Number(localStorage.getItem("id"));
  return (
    <Modal isOpen={isOpen} fullscreen toggle={closeModal}>
      <div className="PostsModalHeader">
        <div>
          <Button close onClick={closeModal}></Button>{" "}
        </div>
        <div>
          {user.name}
          <strong>게시물</strong>
        </div>
        <div>
          {user.id === myId ? (
            <Button
              color="danger"
              outline
              onClick={() => onClickDelete(clickPost.id)}
            >
              삭제하기
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Container>
        <div className="PostsBody">
          <div className="PostsBodyHeader">
            <div className="PostsBodyHeaderImgBox">
              <img
                className="PostsBodyHeaderImg"
                src={user.img}
                alt="userImg"
              ></img>
            </div>
            {user.name}
          </div>
          <img
            className="PostsBodyImg"
            src={clickPost?.img}
            alt="postimg"
          ></img>
          <p>{clickPost?.content}</p>
        </div>
      </Container>
    </Modal>
  );
};

export default PostDetail;