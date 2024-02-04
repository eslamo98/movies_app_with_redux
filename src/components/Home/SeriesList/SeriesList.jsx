import "./SeriesList.css"
import Card from "../../Card/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSerieById } from "../../../store/SeriesSlice";

const SeriesList = ({series, isLoading}) => {
  
  const dispatch = useDispatch();
  const seriesElements = series.map(serie => (
      <Link onClick={()=>{dispatch(getSerieById(serie.imdbID))}} to={`/serie/${serie.imdbID}`} key={serie.imdbID}>
        <Card  title={serie.Title} img={serie.Poster} year={serie.Year} />
      </Link>
  ))
  return (
    <div className="series">
      <h2 className="text-left">Our Series</h2>
      <div className="movies-list">
        {seriesElements}
      </div>
    </div>
  )
}

export default SeriesList