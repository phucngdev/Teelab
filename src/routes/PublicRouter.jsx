import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/user/common/Header";
import Footer from "../layouts/user/common/Footer";

const PublicRouter = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRouter;
