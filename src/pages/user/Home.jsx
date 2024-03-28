import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../layouts/user/home/computer/Banner";
import ListProducts from "../../components/user/computer/ListProducts";
import Slogan from "../../components/user/computer/Slogan";
import Product from "../../components/user/computer/Product";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Trang chủ - TEELAB</title>
      </Helmet>
      <Banner />
      <Slogan />
      <Product />
    </>
  );
};

export default Home;
