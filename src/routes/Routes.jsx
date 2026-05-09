import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/bookDetails.jsx/BookDetails";

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

                  {
                        path: "/bookDetails/:bookId",
                        Component: BookDetails,
                        loader: () => fetch("/booksData.json")
                  }

            ],
            errorElement: <ErrorPage></ErrorPage>,

      },

]);