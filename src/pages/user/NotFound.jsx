import React from "react";
import notfound from "../../../public/notfound.png";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not found | TEELAB</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center">
        <img className="w-[30%]" src={notfound} alt="" />
      </div>
    </>
  );
};

export default NotFound;
