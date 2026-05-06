import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
      {
            path: "/",
            element: <MainLayout></MainLayout>,

            children: [
                  {
                        index: true,
                        element: <Homepage></Homepage>
                  },
                  {
                        path: "/books",
                        element: <Books></Books>,
                  },
                  // {
                  //       path: "*",
                  //       element: <ErrorPage></ErrorPage>,
                  // }

            ],
            errorElement: <ErrorPage></ErrorPage>,

      },

]);