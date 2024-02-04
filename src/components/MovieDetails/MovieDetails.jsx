import "./MoviesDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp, faFilm, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading/Loading";

const MovieDetails = ({chosenMovie, isLoading}) => {
console.log(chosenMovie)
  if(isLoading) return <Loading />
  return (
      <div className="chosen-movie container">
        <div className="movie-details">
          <div className="movie-info">
            <h1>{chosenMovie.Title}</h1>
            <div className="rating">
              <div className="rating-item">
                <span className="rating-key">IBMD Rating  </span>
                <span className="rating-value"><FontAwesomeIcon icon={faStar} className="highlight"/> : {chosenMovie.imdbRating}</span>
              </div>
              <div className="rating-item">
                <span className="rating-key">IBMD Votes </span>
                <span className="rating-value"><FontAwesomeIcon icon={faThumbsUp} /> : {chosenMovie.imdbVotes}</span>
              </div>
              <div className="rating-item">
                <span className="rating-key">Runtime </span>
                <span className="rating-value"><FontAwesomeIcon icon={faFilm} /> : {chosenMovie.Runtime}</span>
              </div>
              <div className="rating-item">
                <span className="rating-key">Year </span>
                <span className="rating-value"><FontAwesomeIcon icon={faCalendarDays} /> : {chosenMovie.Year}</span>
              </div>
            </div>
            <div className="movie-plot">
              {chosenMovie.Plot}
            </div>
            <div className="movie-extra-info">
              <div className="info-content">
                <span className="info-title">Director</span>
                <span className="info-value">{chosenMovie.Director}</span>
              </div>
              <div className="info-content">
                <span className="info-title">Actors</span>
                <span className="info-value">{chosenMovie.Actors}</span>
              </div>
              <div className="info-content">
                <span className="info-title">Writer</span>
                <span className="info-value">{chosenMovie.Writer}</span>
              </div>
              <div className="info-content">
                <span className="info-title">Generes</span>
                <span className="info-value">{chosenMovie.Genre}</span>
              </div>
              <div className="info-content">
                <span className="info-title">Language</span>
                <span className="info-value">{chosenMovie.Language}</span>
              </div>
              <div className="info-content">
                <span className="info-title">Awards</span>
                <span className="info-value">{chosenMovie.Awards}</span>
              </div>
            </div>
          </div>

          <div className="movie-poster">
            <img src={chosenMovie.Poster} alt={chosenMovie.Title} />
          </div>
        </div>
      </div>
  )
}

export default MovieDetails