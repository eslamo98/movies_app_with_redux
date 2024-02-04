import "./NotFound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="loading container">
        <div className="no-container">
          <FontAwesomeIcon icon={faSadCry} size="5x" />
          <div>Error 404! Not found</div>
        </div>
    </div>
  )
}

export default NotFound