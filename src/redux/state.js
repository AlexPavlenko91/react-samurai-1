import {rerenderEntireTree} from "../render";

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Julia'},
            {id: 3, name: 'Dmitriy'},
            {id: 4, name: 'Stepan'},
            {id: 5, name: 'Andrew'},
            {id: 6, name: 'Anna'},
            {id: 7, name: 'Igor\''}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your studying?'},
            {id: 3, message: 'Yo'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Julia'},
            {id: 2, name: 'Dmitriy'},
            {id: 3, name: 'Stepan'},
            {id: 4, name: 'Andrew'}
        ]
    }
};

export let addPost = (postMessage) => {

    let newPost = {
        id: 7,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;


