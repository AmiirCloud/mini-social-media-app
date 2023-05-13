import React, { useState,useEffect } from 'react'
import Login from './Components/Login'
import Header from './Components/Header'
import CreatePost from './Components/CreatePost'
 const  App= ()=>{
  const [user,setUser] =useState("amri")
  const [posts,setPosts]= useState([])
   useEffect(function(){
    document.title  = user?`${user}'s Feed `:'Please Login ';
    // check if the there  a user  change dcoument title to the username
    // else if there is no  any user prompt the document ttile to please login the page 
   },[user])

  if(!user)return <Login setUser={setUser}/>

  return(
    <>
   <h1>Application</h1>
   <Header user={user} setUser={setUser}/>
   <CreatePost/>
  
   {posts.map((post)=>{
    return <img src={post.image}/>
   })}
   
    </>
  )
}
export default App;