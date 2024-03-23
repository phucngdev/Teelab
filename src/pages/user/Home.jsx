import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../layouts/user/common/Banner";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Trang chủ - TEELAB</title>
      </Helmet>
      <Banner />
    </>
  );
};

export default Home;
