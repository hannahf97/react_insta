import React from "react";
import PostsAdd from "../Posts/PostsAdd";
const MainHeader = () => {
  return (
    <div className="mainHeader">
      <div className="mainImgBox">
        <img
          className="mainLogo"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          alt="Logo"
        ></img>
      </div>
      <PostsAdd></PostsAdd>
    </div>
  );
};

export default MainHeader;
