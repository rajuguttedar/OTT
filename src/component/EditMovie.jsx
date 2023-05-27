import { useParams } from 'react-router-dom';
import '../index.css';
import { useEffect, useRef } from 'react';

const Editmovie = () => {

    let {id}=useParams();
    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let yor = useRef();
    let rating = useRef();
    let poster = useRef();
    let trailer = useRef();
    let synopsis = useRef();


    useEffect(()=>{
        fetch("http://localhost:4000/movies/"+id)
        .then((res)=>{return res.json()})
        .then((data)=>{
            moviename.current.value=data.moviename;
            hero.current.value=data.hero;
            heroine.current.value=data.heroine;
            director.current.value=data.director;
            genre.current.value=data.genre;
            poster.current.value=data.poster;
            trailer.current.value=data.trailer;
            yor.current.value=data.yor;
            rating.current.value=data.rating;
            synopsis.current.value=data.synopsis;
            // languages.current.value=data.
        })
    })

    let handleeditMovie = (e)=>{
        e.preventDefault()

        let updatedMovie = {
            moviename: moviename.current.value,
            hero: hero.current.value,
            heroine: heroine.current.value,
            director: director.current.value,
            genre: genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: yor.current.value,
            rating: rating.current.value,
            synopsis : synopsis.current.value,
            languages : []
          };

          let options=document.getElementsByName("lang")
          for (let i = 0; i < options.length; i++) 
          {
            if (options[i].checked==true) {
                updatedMovie.languages.push(options[i].value)
            } 
          }

        console.log(updatedMovie);

        fetch("http://localhost:4000/movies" , 
        {
            method : "PUT" ,
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(updatedMovie)
        } 
        )
        .then(()=>{
            alert("Updated Movie added");
            window.location.reload();
        })

    }


    return ( 
        <div>
        <div className="add-movie"> 
            <h1>UPDATE MOVIE</h1>
            <form onSubmit={handleeditMovie}>
                <input type="text" placeholder="Movie name" ref={moviename} required />
                <input type="text" placeholder="hero name" ref={hero} required/>
                <input type="text" placeholder="heroine name" ref={heroine} required />
                <input type="text" placeholder="director" ref={director} required />
                <fieldset id='field'>
                    <legend>Select languages</legend>
                    <input type="checkbox" name="lang" value="Kannada" id='field' /><label>Kannada</label>
                    <input type="checkbox" name="lang" value="Telugu" id='field' /><label>Telugu</label>
                    <input type="checkbox" name="lang" value="Tamil" id='field' /><label>Tamil</label>
                    <input type="checkbox" name="lang" value="Malayalam" id='field' /><label>Malayalam</label>
                    <input type="checkbox" name="lang" value="Hindi" id='field' /><label>Hindi</label>
                </fieldset>
                <input type="text" placeholder="genre" ref={genre} required/>
                <input type="url" placeholder="poster link" ref={poster} required/>
                <input type="url" placeholder="trailer link" ref={trailer} required/>
                <input type="number" min="1950" max="2024" placeholder='Release Dtae' ref={yor} required/>
                <input type="number" step="0.1" min="1" max="10" placeholder='Ratings' ref={rating} required/>
                <textarea cols="70" rows="6" ref={synopsis}></textarea>

                <input type="submit" value="Update Movie" id='btn'/>

            </form>
        </div>
            
        </div>
     );
}
 
export default Editmovie;