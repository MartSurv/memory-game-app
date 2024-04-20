import { createBrowserRouter, Navigate } from "react-router-dom";

import { Game } from "../pages/Game";
import { Settings } from "../pages/Settings";

const router = createBrowserRouter([
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  { path: "*", element: <Navigate to="/settings" /> },
]);

export default router;
