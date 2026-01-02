import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import FindPartners from '../pages/Partners/FindPartners';
import MyConnections from '../pages/Connections/MyConnections';
import Profile from '../pages/Profile/Profile';
import CreatePartner from '../pages/Partners/CreatePartner';
import PrivateRoute from './PrivateRoute';
import PartnerDetails from '../pages/Partners/PartnerDetails';
import ErrorPage from '../components/ErrorPage';
import Contact from '../pages/contact/Contect';
import AboutUs from '../pages/AboutUs/AboutUs';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardHome from '../pages/DashboardHome/DashboardHome';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'find-partners',
        element: <FindPartners></FindPartners>,
      },
      {
        path: 'partners-details/:id',
        element: (
          <PrivateRoute>
            <PartnerDetails></PartnerDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: 'my-connections',
        element: <MyConnections></MyConnections>,
      },
      {
        path: 'create-profile',
        element: <CreatePartner></CreatePartner>,
      },
      {
        path: 'profile',
        element: <Profile></Profile>,
      },
    ],
  },
]);
