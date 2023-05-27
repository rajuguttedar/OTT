import '../index.css';
import { useRef } from 'react';
import SignUp from './SignUp';

const Addmovie = () => {

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


    let handleAddMovie = (e)=>{
        e.preventDefault()

        let newMovie = {
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
                newMovie.languages.push(options[i].value)
            } 
          }

        console.log(newMovie);

        fetch("http://localhost:4000/movies" , 
        {
            method : "POST" ,
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(newMovie)
        } 
        )
        .then(()=>{
            alert("new data added");
            window.location.reload();
        })

    }


    return ( 
        <div>
        <div className="add-movie"> 
            <h1>ADD NEW MOVIE</h1>
            <form onSubmit={handleAddMovie}>
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

                <input type="submit" value="Add Movie" id='btn'/>

            </form>
        </div>
            
        </div>
     );
}
 
export default Addmovie;