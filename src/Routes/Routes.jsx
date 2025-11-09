import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import FindPartners from '../pages/Partners/FindPartners';
import MyConnections from '../pages/Connections/MyConnections';
import Profile from '../pages/Profile/Profile';
import CreatePartner from '../pages/Partners/CreatePartner';

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
