import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/state";
import {store} from "./redux/redux-store";
import StoreContext from "./StoreContext";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            {/*<App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}/>*/}
            {/*<App store={store}/>*/}
            <App />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(()=>{
    rerenderEntireTree()
})


// rerenderEntireTree(store.getState())
//
// store.subscribe(()=>{
//     let state = store.getState()
//     rerenderEntireTree(state)
// })


