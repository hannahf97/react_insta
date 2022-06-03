import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ProfileHeaderAddModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    content: "",
    img: "/img/post/1.jpeg",
  });
  const onChangeFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onoad = () => {
        setForm({ ...form, img: reader.result });
        resolve();
      };
    });
  };
  return <div></div>;
};

export default ProfileHeaderAddModal;
