import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const [isTolen, setIsToken] = useState(() => {
    const checkToken = localStorage.getItem("token") || false;
    return checkToken;
  });
  return <>{isTolen ? <Outlet /> : <Navigate to="/dang-nhap" />}</>;
};

export default PrivateRouter;
