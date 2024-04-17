import React from 'react'
import {createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter, Outlet  } from 'react-router-dom';
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Forget from './Pages/Forget.jsx'
import Landing2 from './Pages/LandingPage/Landing2.jsx';





const routing = createBrowserRouter([
    {
      path: "/",
      element: <Outlet/>,
      children: [
        {
          path: "/",
          element: <Landing2/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
          },
          {
            path: "/forget",
            element: <Forget/>
          },
        ]
    }
])    


const AppRouter = () => {
  return (
    <>
      <RouterProvider router={routing}/>
    </>
  )
}

export default AppRouter
