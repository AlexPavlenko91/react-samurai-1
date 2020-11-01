/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
