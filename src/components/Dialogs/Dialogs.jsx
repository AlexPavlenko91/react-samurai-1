import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessage = React.createRef();

    let alertText = () => {
        let text = newMessage.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>

            <div className={s.messages}>
                {messageElement}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={alertText}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;
