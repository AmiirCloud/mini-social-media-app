import { useState } from "react";
import PostList from "./PostList";

const CreatePost=()=>{
const[content,setContent] =  useState("")
const[image,setImage] =  useState(null)
const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(content);
    console.log("submited");
    <PostList/>
}
    return(
        <>
        <form onSubmit={handleSubmit} >
            <input
            onChange={(event)=>{
                setContent(event.target.value)
            }} type="text" placeholder="Post Name"/>
            <input type="submit"/>
            <input onChange={(event)=>{
                setImage(event.target.files[0])
            }} type="file"placeholder="Upload File"/>
        </form>
        <p>{content}</p>
       {image && <img style={{width:"100px",height:"100px"}} src={URL.createObjectURL(image)}/>}
        </>
    )
}
export default CreatePost;