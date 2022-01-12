import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props: any) => {

    const postData =[
        {id:1,message:"Hi, how are you?",likesCount:"0"},
        {id:2,message:'Its my first post',likesCount:"23"},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>

                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postData.map(m=>{
                    return (
                        <Post message={m.message} likesCount={m.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MyPosts;