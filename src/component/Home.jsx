import { useEffect, useState } from "react";
import Movieslist from "./Movieslist.jsx";

const Home = () => {

    let [movies , setMovies] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);
    

    useEffect(()=>{
        if(localStorage.getItem("fav")==null )
        {
            localStorage.setItem("fav","[]")
        }
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                console.log(data);
                setMovies(data);
                setPending(false);
                })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 1000)
    } , [])


    return ( 
        <div className="home">   

        {pending==true  &&  <h1>Loading.......</h1>}

        {error && <h1> {error} </h1>}

        {/* {movies && <Movieslist movies={movies} title="All movies"/>} */}

        {movies && <Movieslist movies={movies.filter((m)=>{return m.languages.includes("Kannada")})} title="Kannada movies"/>}
        {movies && <Movieslist movies={movies.filter((m)=>{return m.languages.includes("Telugu")})} title="Telugu movies"/>}
        {movies && <Movieslist movies={movies.filter((m)=>{return m.languages.includes("Hindi")})} title="Hindi movies"/>}
        {movies && <Movieslist movies={movies.filter((m)=>{return m.languages.includes("Tamil")})} title="Tamil movies"/>}
        {movies && <Movieslist movies={movies.filter((m)=>{return m.languages.includes("Malayalam")})} title="Malayalam movies"/>}
        {movies && <Movieslist movies={movies.filter((m)=>{return m.languages.includes("English")})} title="English movies"/>}
        </div>
     );
}
export default Home;