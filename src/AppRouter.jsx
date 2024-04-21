import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Forget from "./Pages/Forget.jsx";
import Landing2 from "./Pages/LandingPage/Landing2.jsx";
import Layout from "./components/Dashboard/Layout.jsx";
import Dashboards from "./components/Dashboard/Dashboards.jsx";
import Plans from "./components/Dashboard/Plans.jsx";
import OrderHistory from "./components/Dashboard/OrderHistory.jsx";
import BookWash from "./components/Dashboard/BookWash.jsx";
import Summary from "./components/Dashboard/Summary.jsx";
import Profile from "./components/Dashboard/Profile.jsx";
import Paystack from "./components/Dashboard/Paystack/Paystack.jsx";
import Logout from "./components/Dashboard/Logout.jsx";
import Section3 from "./Pages/LandingPage/Section3.jsx";
import { UserProvider } from "./components/Context/UserProvider.jsx";
import ProtectedRoute from "./components/Dashboard/ProtectedRoute/ProtectedRoute.jsx";
const routing = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Landing2 />,
      },
      // {
      //   path: "/about",
      //   element: <Section3 />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget",
        element: <Forget />,
      },
      {
        path: "/dash",
        // element: <Layout/>,
        element: <ProtectedRoute><Layout /></ProtectedRoute>,
        children: [
          {
            index: true,
            element: <Dashboards />,
          },
          {
            path: "/dash/plans",
            element: <Plans/>
          },
          {
            path: "/dash/profile",
            element: <Profile/>
          },
          {
            path: "/dash/orderhistory",
            element: <OrderHistory/>
          },
          {
            path: "/dash/bookawash",
            element: <BookWash/>
          },
          {
            path: "/dash/bookawash/summary",
            element: <Summary/>
          },
          {
            path: "/dash/bookawash/summary/paystack",
            element: <Paystack/>
          },
          {
            path: "/dash/logout",
            element: <Logout/>
          }
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <>
      <UserProvider>
      <RouterProvider router={routing} />
      </UserProvider>
    </>
  );
};

export default AppRouter;
