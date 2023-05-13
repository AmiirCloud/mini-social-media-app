const Header= ({user,setUser})=>{

        return(
            <>
            <h1>This is the heder page</h1>
            <h3>Welcome Mr {user}</h3>
            <button
            onClick={()=>{
                setUser("")
            }}>LogOut</button>
            </>
        )

}
export default Header;