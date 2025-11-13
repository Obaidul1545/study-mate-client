import { GraduationCap, User } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('logout successfully!');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const links = (
    <>
      <NavLink to="/" className="custom-style">
        Home
      </NavLink>
      <NavLink to="/find-partners" className="custom-style">
        Find Partner
      </NavLink>
      {user && (
        <>
          <NavLink to="/my-connections" className="custom-style">
            My Connections
          </NavLink>
          <NavLink to="/create-profile" className="custom-style">
            Create Partner Profile
          </NavLink>
        </>
      )}

      {/* copy */}

      {user ? (
        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-9 border-2 border-gray-300 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                referrerPolicy="no-referrer"
                src={
                  user.photoURL ||
                  'https://i.ibb.co.com/sdGfkZS4/dummy-user.png'
                }
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <div className=" pb-3 border-b border-b-gray-200">
              <li className="text-sm font-bold">{user.displayName}</li>
              <li className="text-xs">{user.email}</li>
            </div>

            <Link
              to="/profile"
              className="custom-style inline-flex items-center my-3"
            >
              <User size={18} /> Profile
            </Link>
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem('theme') === 'dark'}
              className="toggle mb-3"
            />
            <Link
              onClick={handleLogout}
              className="px-5 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#ff5252] transition-colors"
            >
              Log Out
            </Link>
          </ul>
        </div>
      ) : (
        <>
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
          </Link>{' '}
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar py-0 flex justify-between items-center container mx-auto">
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
