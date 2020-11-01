/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import s from "../Sidebar.module.css";

const Friends = (props) => {
  return (
      <div className={s.item}>
          <img
              src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              alt=""
          ></img>
          {props.name}
      </div>
  );
};

export default Friends;
