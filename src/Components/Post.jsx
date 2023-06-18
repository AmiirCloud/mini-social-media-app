const Post = ({content,image})=>{
    return(
        <>

        <p>{content}</p>
        {image&&<img src={URL.createObjectURL(image)} alt={image}/>} 
        
        </>
    )
}
export default Post;