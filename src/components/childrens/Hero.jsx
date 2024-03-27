import { Link } from "react-router-dom";
import "../Root.css";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-3xl mt-12 mb-24">
      <div className="hero-content flex-col lg:flex-row-reverse gap-24">
        <img
          src="public\images\banner.png"
          className="max-w-sm"
        />
        <div className="max-w-[526px]">
          <h1 className="fonter text-5xl font-bold pb-12">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listedbooks"><button className="btn mainBg text-white">View The List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
