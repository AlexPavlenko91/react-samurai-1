import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
//import MyPosts from "./Profile/MyPosts/MyPosts.jsx";

const Profile = () => {
  return (
    <div>
      <div>
        <img className={s.imgMain}
          src="https://blog.nationalgeographic.org/wp-content/uploads/2020/05/May-11_Dorset-heathland_shutterstock_1332881306_sml-1140x450.jpg"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
