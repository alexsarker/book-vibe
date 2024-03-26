import { Link } from "react-router-dom";
import "./Root.css";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-6 text-center mt-72">
      <h1 className="text-8xl font-bold">404</h1>
      <h3 className="text-2xl font-semibold">OOPS!</h3>
      <p>The page you requested could not be found.</p>
      <Link to="/">
        <button className="btn">Go back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
