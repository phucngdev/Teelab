import React from "react";
import notfound from "../../../public/notfound.png";
const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[90px] font-extrabold">404</h1>
        <span className="text-[60px]">Page not found</span>
      </div>
    </>
  );
};

export default NotFound;
