import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Homepage from "../Homepage/Homepage";
import AllCraftPage from "../All-craft-page/AllCraftPage";
import UpdateCraftPage from "../Update-craft-page/UpdateCraftPage";
import Viewdetails from "../Viewdetails-page/ViewDetails";
import AddCraftPage from "../Add-craft-page/AddCraftPage";
import SignInPage from "../Signin-page/SignInPage";
import SignUpPage from "../Signup-page/SignUpPage";
import MyCraftPage from "../My-craft-page/MyCraftPage";
import AboutPage from "../Aboutpage/AboutPage";
import PrivateRoutes from "../Routes/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import MyViewDetails from "../MyCraft-ViewDetails/MyViewDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: () => fetch("http://localhost:5000/all-crafts"),
      },
      {
        path: "/all-crafts",
        element: <AllCraftPage />,
        loader: () => fetch("http://localhost:5000/all-crafts"),
      },
      {
        path: "/add-crafts",
        element: <AddCraftPage />,
      },
      {
        path: "/update-crafts/:id",
        element: <UpdateCraftPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user-items/${params.id}`),
      },
      {
        path: "/view-details/craft/:id",
        element: (
          <PrivateRoutes>
            <Viewdetails />,
          </PrivateRoutes>
        ),

        loader: ({ params }) =>
          fetch(`http://localhost:5000/view-details/craft/${params.id}`),
      },
      {
        path: "/my-listed-crafts",
        element: (
          <PrivateRoutes>
            <MyCraftPage />,
          </PrivateRoutes>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/user/${params.email}`),
      },
      {
        path: "/user-view-details/:id",
        element: (
          <PrivateRoutes>
            <MyViewDetails />,
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user-view-details/${params.id}`),
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/my-listed-crafts",
        element: <MyCraftPage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
