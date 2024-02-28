import error from "../../assets/error.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="myMain my-5 text-center">
      <div>
        <img src={error} alt="Imagen de error 404" className="img-fluid" />
      </div>
      <Link to="/" className="btn btn-warning text-light fw-bold mt-4">Go Home</Link>
    </div>
  );
};

export default Error404;
