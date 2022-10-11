import {ActionsType, ProfilePageType} from './state';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState: ProfilePageType = {
    postsData: [
        {id: '1', message: 'It is my first message', likesCount: 10},
        {id: '2', message: 'What are you learning now?', likesCount: 15},
    ],
    newPostText: ''
};

export const profilePageReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: '3',
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText};
        default:
            return {...state};
    }
};

export type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const;
};

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText
    } as const;
};