import React from "react";
import { Link } from "react-router-dom";
import { navList } from "../../../constants/nav";

const NavHeader = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-center md:h-[112px] lg:h-[56px]">
        <ul className="flex flex-wrap justify-center items-center h-full md:text-sm">
          {navList.map((item, index) => (
            <li key={index} className="">
              <Link
                to={item.link}
                className="pt-[15px] px-[15px] pb-[17px] hover:text-[#707070]"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavHeader;
