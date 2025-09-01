import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import dummyBlogs from "../dummyJson/dummyBlogs";
import DetailsBlog from "../pages/blog/DetailsBlog";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blog/:slug",
          element: <DetailsBlog dummyBlogs={dummyBlogs} />, // pass dummyBlogs
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);
