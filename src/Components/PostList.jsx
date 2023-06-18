import React from 'react'
import Post from './Post';
const PostList = ({posts})=>{
    return(
       
         posts.map(post=> <Post content = {post.content} image = {post.image}/>
   
   )
         
    )
}
export default PostList;