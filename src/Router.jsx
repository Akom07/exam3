import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Details from "./pages/Details";
import SignPage from "./pages/SignPage";
import ShopingCart from "./pages/ShopingCart";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
    {
      path: "/sign/:sign",
      element: <SignPage />,
    },
    {
      path: "/Cart",
      element: <ShopingCart />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
