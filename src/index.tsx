import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/state";
import {store} from "./redux/redux-store";


export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            {/*<App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}/>*/}
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})

// rerenderEntireTree(store.getState())
//
// store.subscribe(()=>{
//     let state = store.getState()
//     rerenderEntireTree(state)
// })

// store.subscribe(rerenderEntireTree);
// reportWebVitals();
