import "./Loading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className="loading container">
        <FontAwesomeIcon icon={faSpinner} spin size="5x" />
    </div>
  )
}

export default Loading