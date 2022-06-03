import { Card } from "reactstrap";

const MainCard = ({ post }) => {
  return (
    <Card className="mainCard">
      <div className="PostsBodyHeader">
        <div className="PostsBodyHeaderImgBox">
          <img
            className="PostsBodyHeaderImg" //
            src={post.userImg}
            alt="userImg"
          ></img>
        </div>
        {post.userName}
      </div>
      <img
        className="PostsBodyImg"
        src={post?.img} //
        alt="postimg"
      ></img>
      <p>{post?.content}</p>
    </Card>
  );
};

export default MainCard;
