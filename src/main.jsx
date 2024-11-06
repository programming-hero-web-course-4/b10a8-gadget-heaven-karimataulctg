import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Home/Home';
import DashBoard from './Dashboard/DashBoard';
import GadgetDetail from './GadgetDetail/GadgetDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wishlist from './WishList/Wishlist';
import GadgetSlide from './GadgetSlide/GadgetSlide';
import Statistics from './Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'gadgets/:product_id',
        element: <GadgetDetail />,
        loader: () => fetch('/gadgetData.json')
      },
      {
        path: 'dashboard',
        element: <DashBoard />
      },
      {
        path: 'wishlist',
        element: <Wishlist />
      },
      {
        path: 'gadgetslide',
        element: <GadgetSlide></GadgetSlide>
      },
      {
        path: 'statistics',
         element: <Statistics></Statistics>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
