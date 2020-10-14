import React from "react";
import s from "./Post.module.css";

const Post = (props) => {


  return (
    <div className={s.item}>
      <div>
        <img
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
          alt=""
        ></img>
        {props.message}
      </div>
  <span>likes {props.likesCount}</span>
    </div>
  );
};

export default Post;
