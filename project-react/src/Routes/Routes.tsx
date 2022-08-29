import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import Register from "../components/Register";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};
