import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";

// import Technologies from './Technologies.js';

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile'
                       render={() => <Profile
                           state={props.state.profilePage}
                           addPost={props.addPost}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.dialogsPage}/>}/>
            </div>
            <div className="app-wrapper-sidebar">
                <Sidebar state={props.state.sidebar}/>

            </div>
        </div>
    );
};

export default App;
