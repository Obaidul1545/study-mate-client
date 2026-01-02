import { Link, NavLink, Outlet } from 'react-router';

import {
  UserPlus,
  User,
  PanelRightOpenIcon,
  LayoutDashboard,
  HomeIcon,
  Handshake,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DashboardLayout = () => {
  const navItemClass = (isActive) =>
    `flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-[#FF6B6B] hover:text-white ${
      isActive ? 'bg-[#FF6B6B] text-white' : 'text-gray-300'
    }`;

  return (
    <>
      <div className="">
        <header className="sticky top-0 z-50">
          <Navbar></Navbar>
        </header>
        <div className="drawer lg:drawer-open bg-[#E2E8F0]">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

          {/* main content */}
          <div className="drawer-content">
            <nav className="navbar w-full bg-[#0F172A] text-white">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost text-white"
              >
                <PanelRightOpenIcon size={24} />
              </label>
              <div className="px-4 text-lg font-semibold">Dashboard</div>
            </nav>

            <Outlet />
          </div>

          {/* side navbar */}
          <div className="drawer-side is-drawer-close:overflow-visible">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <div className="flex min-h-full flex-col bg-[#0F172A] text-white is-drawer-close:w-20 is-drawer-open:w-64">
              <ul className="menu w-full grow p-3 space-y-4">
                <li>
                  <Link to={'/'} className="text-gray-200">
                    <LayoutDashboard size={26} />
                    <span className="is-drawer-close:hidden text-2xl font-semibold">
                      Study Mate
                    </span>
                  </Link>
                </li>

                {/* home page */}
                <li className="mt-4">
                  <NavLink
                    to={'/dashboard'}
                    end
                    className={({ isActive }) => navItemClass(isActive)}
                    data-tip="Home"
                  >
                    <HomeIcon size={20} />
                    <span className="is-drawer-close:hidden">Home</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={'/dashboard/my-connections'}
                    className={({ isActive }) => navItemClass(isActive)}
                    data-tip="My Connections"
                  >
                    <Handshake size={20} />
                    <span className="is-drawer-close:hidden">
                      My Connections
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={'/dashboard/create-profile'}
                    className={({ isActive }) => `${navItemClass(isActive)}`}
                    data-tip="Create profile"
                  >
                    <UserPlus size={20} />
                    <span className="is-drawer-close:hidden">
                      Create profile
                    </span>
                  </NavLink>
                </li>

                {/* my profile */}
                <li>
                  <NavLink
                    to={'/dashboard/profile'}
                    className={({ isActive }) => navItemClass(isActive)}
                    data-tip="My profile"
                  >
                    <User size={20} />
                    <span className="is-drawer-close:hidden">My profile</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default DashboardLayout;
