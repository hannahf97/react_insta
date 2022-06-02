import { useContext, useEffect } from "react";
import { Container } from "reactstrap";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import { FollowContext } from "../../store/FollowContext";
import Post from "../Posts/Post";
import { useSelector, useDispatch } from "react-redux";
import { selectMyPost } from "../../store/posts";
const Profile = () => {
  const { name, img, id } = useSelector((state) => state.users.me);
  const myPosts = useSelector((state) => state.posts.myPosts);
  const { follows } = useContext(FollowContext);
  const dispatch = useDispatch();

  const getMyPost = () => {
    dispatch(selectMyPost());
  };

  const myFollower = () => {
    return follows.filter((follow) => follow.following === id);
  };
  const myFollowing = () => {
    return follows.filter((follow) => follow.follower === id);
  };

  useEffect(() => {
    getMyPost();
    // myFollower();
    // myFollowing();
  }, []);

  return (
    <>
      <ProfileHeader name={name}></ProfileHeader>
      <Container className="ProfileContainer">
        <ProfileBody
          img={img}
          follower={myFollower()}
          following={myFollowing()}
          posts={myPosts.posts}
          name={name}
        ></ProfileBody>
        <Post
          posts={myPosts.posts}
          name={name}
          img={img}
          postState={myPosts}
        ></Post>
      </Container>
    </>
  );
};
export default Profile;
