import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/Pages/About";
const router = createBrowserRouter([
  { path: "/about", element: <About /> },
  { path: "/", element: <Header /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
