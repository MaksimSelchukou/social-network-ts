import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, store} from "./redux/state";


export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);
// reportWebVitals();
