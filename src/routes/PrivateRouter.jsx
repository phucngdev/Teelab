import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../layouts/admin/SideBar";
import Header from "../layouts/admin/Header";

const PrivateRouter = () => {
  const [isTolen, setIsToken] = useState(() => {
    const checkToken = localStorage.getItem("token") || false;
    return checkToken;
  });
  const [user, setUser] = useState(() => {
    const userLocal = localStorage.getItem("user") || {};
    return userLocal;
  });
  return (
    <>
      {isTolen ? (
        <>
          <Sidebar />
          <Header user={user} />
          <div className="w-[calc(100%-320px)] ms-[320px] mt-[56px] p-[30px]">
            <Outlet />
          </div>
        </>
      ) : (
        <Navigate to="/dang-nhap" />
      )}
    </>
  );
};

export default PrivateRouter;
