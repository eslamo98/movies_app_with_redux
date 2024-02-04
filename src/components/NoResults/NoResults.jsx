import "./NoResults.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getMovies } from "../../store/MovieSlice";
import { useDispatch } from "react-redux";

const NoResults = () => {
  const dispatch = useDispatch();
  return (
    <div className="loading container">
        <div className="no-container">
          <FontAwesomeIcon icon={faSadCry} size="5x" />
          <div>Sorry no results were found</div>
          <Link onClick={()=>{dispatch(getMovies("harry"))}} to="/" className="custom-btn">Go To Home Page</Link>
        </div>
    </div>
  )
}

export default NoResults