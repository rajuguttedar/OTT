import { Link } from "react-router-dom";
import '../index.css'
import { useEffect, useRef, useState } from "react";
const Navbar = () => {

    let [searchword, setSearchword]=useState("")
    let [movienames, setmovienames]=useState([])
    let [menu,setmenu]=useState(false)

    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{
            // let names=data.map((m)=>{return m.moviename})
            // let filteredNames=names.filter((name)=>{return name.toLowerCase().includes(searchword.toLowerCase())})
            // setmovienames(filteredNames)

            let names=data.map((m)=>{return{moviename:m.moviename, id:m.id}})
            let filteredNames=names.filter((movie)=>{return movie.moviename.toLowerCase().includes(searchword.toLowerCase())})
            setmovienames(filteredNames)
        })
    },[searchword])

    let s=useRef()
    return ( 
        <nav>
            <div id="logo">
              <Link to="/">  <h1>Movies 🕷 </h1></Link>
              {/* <span>{searchword}</span> */}
            </div>

            <div id="search-bar">
                <input type="search" placeholder="Search for movies" value={searchword} onChange={(e)=>{ setSearchword(e.target.value)}}/>
                <Link to={`/search/${searchword}`}><button onClick={()=>{setSearchword("")}}>search</button></Link>
            </div>
            
            <div id="favorite-movie">
                <Link to="/favorite">Favorite Movie</Link>
            </div>

            <div id="add-movie">
                <Link to="/add">Add Movie</Link>
            </div>

            <div className="sign-up"> 
            <Link to="signup"><i class='bx bxs-user-circle signupbox'></i></Link>
            </div>

            <div id="hamberger">
                <span onClick={()=>{setmenu(!menu)}}>
                    {menu==false?<i class='bx bx-menu'></i>:<i class="bx bx-x"></i>}
                </span>
                
                {menu && <div id="menu">
                    <div id="menu-favorite-movie">
                        <Link to="/favorite">Favorite Movie</Link>
                    </div>
                        
                    <div id="menu-add-movie">
                        <Link to="/add">Add Movie</Link>
                    </div>
                       
                    <div className="menu-sign-up"> 
                        <Link to="signup"><i class='bx bxs-user-circle signupbox'></i></Link>
                    </div>
                </div>}
            </div>
            {searchword!="" && <div className="suggestion-box">
                <ul>
                    {/* {movienames.map((name)=>{return(<li  onClick={(e)=>{setSearchword(e.target.innerText)}}>{name}</li>)})} */}
                    {movienames.map((movie)=>{return(<Link to={`/moviedetails/${movie.id}`}><li onClick={()=>{setSearchword("")}}>{movie.moviename}</li></Link>)})}
                </ul>
            </div>}
        </nav>
     );
}
 
export default Navbar;