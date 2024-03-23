import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllData } from "../../../services/crud.service";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

const NavHeader = ({ dataCate, loading }) => {
  return (
    <>
      {loading ? (
        <Skeleton.Button />
      ) : (
        dataCate?.map((item, index) => (
          <li key={index} className="">
            <Link
              to={item?.link}
              className="pt-[15px] px-[15px] pb-[17px] hover:text-[#707070]"
            >
              {item?.text}
            </Link>
          </li>
        ))
      )}
    </>
  );
};

export default NavHeader;
