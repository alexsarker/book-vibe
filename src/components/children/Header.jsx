import { NavLink } from "react-router-dom";
import "../Root.css";
const Header = () => {
  const nested = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedbooks">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pagestoread">Pages to Read</NavLink>
      </li>
      <li>
        <NavLink to="/bookrequest">Book Request</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nested}
          </ul>
        </div>
        <h2 className="text-2xl font-bold">
          Book<span className="mainText">Vibe.</span>
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{nested}</ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn mainBg text-white">Sign In</a>
        <a className="btn secBg text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
