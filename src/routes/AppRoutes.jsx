import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Favourites from "../pages/Favourites";
import ArtistDashboard from "../pages/ArtistDashboard";
import AuthLayout from "../layouts/AuthLayout";
import ListenerLayout from "../layouts/ListenerLayout";
import ListenerProtected from "./protectedRoutes/listenerProtected";
import ArtistProtected from "./protectedRoutes/ArtistProtected";
import ArtistLayout from "../layouts/ArtistLayout";
import PublicProtected from "./protectedRoutes/publicProtected";
import AboutUs from "../pages/AboutUs";
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <ListenerProtected />,
          children: [
            {
              path: "",
              element: <ListenerLayout />,
              children: [
                {
                  path: "",
                  element: <Home />,
                },
                 {
                  path: "favourites",
                  element: <Favourites />,
                },
                {
                  path:"about",
                  element:<AboutUs/>
                }
              ],
            },
          ],
        },
        {
          path: "artist",
          element: <ArtistProtected />,
          children: [
            {
              path: "",
              element: <ArtistLayout />,
              children: [
                {
                  path: "",
                  element: <ArtistDashboard />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
