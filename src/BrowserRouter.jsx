import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./pages/home";
import Posts from "./pages/posts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts", element: <Posts /> },
    ],
  },
]);

export default router