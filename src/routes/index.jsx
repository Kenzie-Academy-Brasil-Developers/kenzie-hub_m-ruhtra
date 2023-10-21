import { Route, Routes } from "react-router-dom";
import { DashboardPage, LoginPage, RegisterPage } from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
