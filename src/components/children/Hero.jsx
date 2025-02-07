import { Link } from "react-router-dom";
import "../Root.css";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-3xl mt-12 mb-24 py-10 lg:py-0">
      <div className="hero-content flex-col lg:flex-row-reverse gap-24">
        <img className="max-w-sm" src="https://i.ibb.co/tbFt7pL/banner.png" alt="" />
        <div className="max-w-[526px] text-center lg:text-start">
          <h1 className="fonter text-5xl font-bold pb-12">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listedbooks">
            <button className="btn mainBg text-white">View The List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
