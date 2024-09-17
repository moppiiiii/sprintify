import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import NotFoundPage from "./pages/not-found/NotFound.page";
import BoardPage from "./pages/board/Board.page";
import SprintPage from "./pages/sprint/Sprint.page";
import RetrospectivePage from "./pages/retrospective/Retrospective.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/board",
    element: <BoardPage />,
  },
  {
    path: "/sprint",
    element: <SprintPage />,
  },
  {
    path: "/retrospective",
    element: <RetrospectivePage />,
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
