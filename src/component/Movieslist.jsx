import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movieslist = ({movies , title}) => {
    let [favId, setFvaid]=useState([]);
    let [altered, setAltered]=useState(0);

    useEffect(()=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
           setFvaid( fav.map((m)=>{return m.id}));
    },[altered])

    let addFav = (movie)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        localStorage.setItem("fav" , JSON.stringify(fav));
        setAltered(altered+1)
      }

      let removeFav=(id)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav=fav.filter((m)=>{return m.id!=id})
        localStorage.setItem("fav" , JSON.stringify(fav));
        setAltered(altered+1)
      }

    return ( 
    <div>
        <h1 id="title">{title}</h1>

        <div className="movies">
                    {movies.map((movie)=>{
                        return(
                            <div className="movie">
                                {favId.includes(movie.id)?<button id="whislist" onClick={()=>{ removeFav(movie.id) }}><i class='bx bxs-heart filled' ></i></button>:
                                <button id="whislist" onClick={()=>{ addFav(movie) }}><i id="empty" class='bx bx-heart' ></i></button>}
                                <Link to={`/moviedetails/${movie.id}`}>
                                    <img src={movie.poster} alt="poster" width="200px" height="250px" />
                                    <h2>{movie.moviename}</h2>
                                    <p>{movie.genre}</p>
                                </Link>
                            </div>
                        )
                    })}
        </div>

    </div> );
}
 
export default Movieslist;