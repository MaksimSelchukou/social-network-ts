import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type dialogsType={
    id:number
    name:string
}
    let dialogs:Array<dialogsType> = [
    {id: 1, name: "Tatiana"},
    {id: 2, name: "Maksim"},
    {id: 3, name: "Kirill"},
    {id: 4, name: "Roma"},
    {id: 5, name: "Veronika"},
];

export type messagesType={
    id:number
    message:string
}

const messages:Array<messagesType> = [
    {id: 1, message: "Hello"},
    {id: 2, message: "Bye-bye"},
];
export type postType={
    id:number
    message:string
    likesCount:string
}

const post:Array<postType> =[
    {id:1,message:"Hi, how are you?",likesCount:"0"},
    {id:2,message:'Its my first post',likesCount:"23"},
    {id:3,message:'Its my first post',likesCount:"21"},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} post={post}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
