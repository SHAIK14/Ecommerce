import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Pages/Error";
import Header from "./components/Header";
import About from "./components/Pages/About";
import RootLayout from "./components/Pages/root";
import Home from "./components/Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      // { path: "/home", element: <Home /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
