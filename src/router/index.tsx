import { createBrowserRouter, Navigate } from "react-router-dom";

import { Game } from "../pages/Game";
import { Settings } from "../pages/Settings";

export enum Path {
  Game = "/game",
  Settings = "/settings",
}

const router = createBrowserRouter([
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  { path: "*", element: <Navigate to="/settings" /> },
]);

export default router;
