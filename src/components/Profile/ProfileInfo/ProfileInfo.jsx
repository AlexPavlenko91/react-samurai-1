import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.imgMain}
                     src="https://blog.nationalgeographic.org/wp-content/uploads/2020/05/May-11_Dorset-heathland_shutterstock_1332881306_sml-1140x450.jpg"
                     alt=""
                />
            </div>
            <div className={s.descriptionBlock}>
                ava + description</div>
        </div>
    );
};

export default ProfileInfo;
