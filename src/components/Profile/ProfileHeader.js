import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { GoDiffAdded } from "react-icons/go";
import { Button, Container, Input, Modal } from "reactstrap";
import "./ProfileHeader.css";
const ProfileHeader = ({ name }) => {
  return (
    <div className="ProfileHeaderBox">
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <GoDiffAdded size={30}></GoDiffAdded>
        <AiOutlineMenu size={30}></AiOutlineMenu>
        <Button>
          <BiLogOut size={30}></BiLogOut>
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;
