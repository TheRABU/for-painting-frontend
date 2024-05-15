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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: () => fetch("http://localhost:5000/all-crafts"),
      },
      {
        path: "/all-crafts",
        element: <AllCraftPage />,
      },
      {
        path: "/add-crafts",
        element: <AddCraftPage />,
      },
      {
        path: "/update-crafts/craft/:id",
        element: <UpdateCraftPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-crafts/${params.id}`),
      },
      {
        path: "/view-details/craft/:id",
        element: <Viewdetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/view-details/${params.id}`),
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
