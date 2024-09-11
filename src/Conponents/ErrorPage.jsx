import { Link, useRouteError } from "react-router-dom";
import logo from "../assets/icons/Frame.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page" className="flex flex-col justify-center items-center">
      <img src={logo} alt="logo" />
      <p className="text-2xl font-medium mb-3">
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn btn-error">
        <Link to={"/"}>Back Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
