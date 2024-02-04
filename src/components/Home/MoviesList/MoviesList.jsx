import "./MoviesList.css"
import Card from "../../Card/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovieById, getMovies } from "../../../store/MovieSlice"
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const MoviesList = ({movies}) => {

  const search = useRef("");
  const dispatch = useDispatch();
  
  const moviesElements = movies.map(movie => (
      <Link onClick={()=>{dispatch(getMovieById(movie.imdbID))}} to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
        <Card  title={movie.Title} img={movie.Poster} year={movie.Year} />
      </Link>
  ))

  const handleSearch = () => {
    dispatch(getMovies(search.current.value));
  }
  return (
    <>
      <div className="movies-heading">
        <h2 className="text-left">Our Movies</h2>
        <div className="search">
          <input ref={search} type="text" placeholder="search" id="" />
          <div onClick={()=>{handleSearch()}} className="search-btn">
            <Link to="/results">
            <FontAwesomeIcon icon={faSearch} />
            </Link>
          </div>
        </div>
      </div>
      <div className="movies-list">
        {moviesElements}
      </div>
    </>
  )
}

export default MoviesList