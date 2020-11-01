/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import s from "./Sidebar.module.css";
import Friends from "./Friends/Friends";


const Sidebar = (props) => {
    let friendsList = props.state.friends.map(f => <Friends name = {f.name}/>);
    {/*<Route path='/friends'
                       render={() => <Sidebar state={props.state.profilePage}/>}/>*/}
    return (
      <div className={s.side}>
          {friendsList}
      </div>
  );
};

export default Sidebar;
