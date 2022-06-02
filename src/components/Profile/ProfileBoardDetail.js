import { Button, Container, Modal } from "reactstrap";
import ProfileBody from "./ProfileBody";
import "./ProfileBoardDetail.css";

const ProfileBoardDetail = ({ name, img, isOpen, clickPost, closeModel }) => {
  console.log(clickPost);
  return (
    <Modal isOpen={isOpen} fullscreen toggle={closeModel}>
      <div className="profileBoardModalHeader">
        <div>
          <Button clone onClick={closeModel}></Button>{" "}
        </div>
        <div>
          {name}
          <strong>게시물</strong>
        </div>
        <div>
          <Button color="danger" outline>
            삭제하기
          </Button>
        </div>
      </div>
      <Container>
        <div className="profileBoardBody">
          <div className="profileBoardBodyHeader">
            <div className="profileBoardBodyHeaderImgBox">
              <img
                className="profileBoardBodyHeaderImg"
                src={img}
                alt="userImg"
              ></img>
            </div>
            {name}
          </div>
          <img
            className="profileBoardBodyImg"
            src={clickPost?.img}
            alt="postimg"
          ></img>
          <p>{clickPost?.content}</p>
        </div>
      </Container>
    </Modal>
  );
};

export default ProfileBoardDetail;
