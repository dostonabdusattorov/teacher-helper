import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./constants";
import { HomeRoute, homeLoader, LoginRoute } from "./routes";
import { RegisterRoute } from "./routes";

const router = createBrowserRouter([
  { path: Routes.Home, element: <HomeRoute />, loader: homeLoader },
  { path: Routes.Register, element: <RegisterRoute /> },
  { path: Routes.Login, element: <LoginRoute /> },
  { path: "*", element: <div>Not Found</div> },
]);

export default () => <RouterProvider router={router} />;
