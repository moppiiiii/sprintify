import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import NotFoundPage from "./pages/not-found/NotFound.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
  {
    path: "/*",
    element: <Navigate to="/404" />,
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
