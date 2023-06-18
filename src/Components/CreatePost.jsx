import { useState,useRef } from "react";





function CreatePost({post,setPost}){
    const [image,setImage] =  useState(null)
    const [content,setContent] =  useState("")
  const imageRef =  useRef();
  const myContent  =  useRef();
  const contentRef  = useRef();

 const handleSubmit = (e)=>{
    e.preventDefault()
    const newPost  =  {content,image};
    setPost([newPost,...post])
    imageRef.current.value = ""
   setContent("")
   setImage(null)
    // console.log([newPost, ...post])
    // console.log(post)
   myContent.current.focus()
} 

    return(
        <>
          <form onSubmit={handleSubmit}>
          <input type="text" ref={myContent} value={content}  onChange={(e)=>{
            setContent(e.target.value)
          }} />     
            <input type="file" ref={imageRef}  onChange={(event)=>{
                setImage(event.target.files[0])
            }}  /> 
            <input type="submit"/>
            {/* <img src="" alt="" className="images" /> */}


        </form>
        </>
      

    )
}
export default CreatePost;