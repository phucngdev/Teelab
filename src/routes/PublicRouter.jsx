import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/user/common/Header";

const PublicRouter = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default PublicRouter;
