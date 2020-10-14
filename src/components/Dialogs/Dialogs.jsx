import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
            <NavLink to="/dialogs">Alex</NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/2">Julia</NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/3">Stepan</NavLink>
        </div>
            <NavLink to="/dialogs/4">Dmitriy</NavLink>
        <div className={s.dialog}></div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
