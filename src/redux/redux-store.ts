import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})

export type storeType = ReturnType<typeof reducers>

export const store = createStore(reducers)


// @ts-ignore
window.store = store

