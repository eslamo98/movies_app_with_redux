import "./SeriesDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp, faFilm, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading/Loading";

const SeriesDetails = ({chosenSerie, isLoading}) => {

  console.log(chosenSerie);
  if(isLoading) return <Loading />
  return (
      <div className="chosen-movie container">
        <div className="movie-details">
          <div className="movie-info">
            <h1>{chosenSerie.Title}</h1>
            <div className="rating">
              <div className="rating-item">
                <span className="rating-key">IBMD Rating  </span>
                <span className="rating-value"><FontAwesomeIcon icon={faStar} className="highlight"/> : {chosenSerie.imdbRating}</span>
              </div>
              <div className="rating-item">
                <span className="rating-key">IBMD Votes </span>
                <span className="rating-value"><FontAwesomeIcon icon={faThumbsUp} /> : {chosenSerie.imdbVotes}</span>
              </div>
              <div className="rating-item">
                <span className="rating-key">Runtime </span>
                <span className="rating-value"><FontAwesomeIcon icon={faFilm} /> : {chosenSerie.Runtime}</span>
              </div>
              <div className="rating-item">
                <span className="rating-key">Year </span>
                <span className="rating-value"><FontAwesomeIcon icon={faCalendarDays} /> : {chosenSerie.Year}</span>
              </div>
            </div>
            <div className="movie-plot">
              {chosenSerie.Plot}
            </div>
            <div className="movie-extra-info">
              <div className="info-content">
                <span className="info-title">Director</span>
                <span className="info-value">{chosenSerie.Director}</span>
              </div>
              <div className="info-content">
                <span className="info-title">Actors</span>
                <span className="info-value">{chosenSerie.Actors}</span>
              </div>
              <div className="info-content">
                <span className="info-title">Writer</span>
                <span className="info-value">{chosenSerie.Writer}</span>
              </div>
              <div className="info-content">
                <span className="info-title">Generes</span>
                <span className="info-value">{chosenSerie.Genre}</span>
              </div>
              <div className="info-content">
                <span className="info-title">Language</span>
                <span className="info-value">{chosenSerie.Language}</span>
              </div>
              <div className="info-content">
                <span className="info-title">Awards</span>
                <span className="info-value">{chosenSerie.Awards}</span>
              </div>
            </div>
          </div>

          <div className="movie-poster">
            <img src={chosenSerie.Poster} alt={chosenSerie.Title} />
          </div>
        </div>
      </div>
  )
}

export default SeriesDetails