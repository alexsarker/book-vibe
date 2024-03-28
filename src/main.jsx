import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/children/Home";
import ListedBooks from "./components/children/ListedBooks";
import PagesToRead from "./components/children/PagesToRead";
import BookDetail from "./components/children/BookDetail";
import BookRequest from "./components/children/BookRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/bookrequest",
        element: <BookRequest></BookRequest>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
