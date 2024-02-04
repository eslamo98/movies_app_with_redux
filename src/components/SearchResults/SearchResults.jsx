import "./SearchResults.css"
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovieById } from "../../store/MovieSlice";
import Loading from "../Loading/Loading";
import NoResults from "../NoResults/NoResults";

const SearchResults = ({movies, isLoading}) => {

  const dispatch = useDispatch();

  
  if(isLoading) return <Loading />;
  if(!movies) return <NoResults />

  const moviesElements = movies.map(movie => (
      <Link onClick={()=>{dispatch(getMovieById(movie.imdbID))}} to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
        <Card  title={movie.Title} img={movie.Poster} year={movie.Year} />
      </Link>
  ))
  

  return (
    <div className="result">
      <div className="movies-heading container">
        <h2 className="text-left">Search Results</h2>
      </div>
      <div className="movies-list">
        {moviesElements}
      </div>
    </div>
  )
}

export default SearchResults