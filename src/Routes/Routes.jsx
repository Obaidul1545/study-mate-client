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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
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
      {
        path: 'my-connections',
        element: (
          <PrivateRoute>
            <MyConnections></MyConnections>
          </PrivateRoute>
        ),
      },
      {
        path: 'create-profile',
        element: (
          <PrivateRoute>
            <CreatePartner></CreatePartner>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
