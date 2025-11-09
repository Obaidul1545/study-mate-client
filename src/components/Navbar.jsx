import { GraduationCap } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="custom-style">
        Home
      </NavLink>
      <NavLink to="/find-partners" className="custom-style">
        Find Partner
      </NavLink>
      <NavLink to="/my-connections" className="custom-style">
        My Connections
      </NavLink>
      <NavLink to="/create-profile" className="custom-style">
        Create Profile
      </NavLink>
      <NavLink to="/profile" className="custom-style">
        Profile
      </NavLink>
      <Link
        to="/login"
        className="px-5 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#ff5252] transition-colors"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="px-5 py-2 bg-[#00B894] text-white rounded-lg hover:bg-[#00a085] transition-colors"
      >
        Register
      </Link>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="navbar flex justify-between items-center container mx-auto">
        <div className="flex">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
            >
              {links}
            </ul>
          </div>
          <div className="">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-[#FF6B6B] p-2 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#FF6B6B] text-xl font-bold">
                StudyMate
              </span>
            </Link>
          </div>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-8">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
