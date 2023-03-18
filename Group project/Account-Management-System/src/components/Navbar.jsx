import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-20 shadow shadow-lg">
      <div className="flex-1 ">
        <Link to="/" className="btn btn-ghost normal-case text-3xl">
          IB
          <span className="text-orange-700">S_B</span> ank
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg font-bold flex gap-x-2">
          <li>
            <Link to="/login" className="hover:border hover:border-orange-700">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:border hover:border-orange-700">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
