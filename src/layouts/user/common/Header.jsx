import React from "react";
import { Link } from "react-router-dom";
import NavHeader from "../../../components/user/computer/NavHeader";
import SideBar from "../home/mobile/SideBar";
import TopHeader from "./TopHeader";
import {
  logoCenter,
  system,
  home,
  tableSize,
  service,
} from "../../../constants/path";

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <SideBar />
      <div className="hidden md:block container mx-auto">
        <ul className="flex justify-evenly items-center uppercase h-[77px] border-b-[1px] border-solid border-gray-300 md:text-sm lg:text-base">
          <li>
            <Link to={home.path}>{home.text}</Link>
          </li>
          <li>
            <Link to={service.path}>{service.text}</Link>
          </li>
          <li className="md:w-[160px] lg:w-[200px]">
            <Link to={logoCenter.path}>
              <img src={logoCenter.url} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to={tableSize.path}>{tableSize.text}</Link>
          </li>
          <li>
            <Link to={system.path}>{system.text}</Link>
          </li>
        </ul>
        <NavHeader />
      </div>
    </header>
  );
};

export default Header;
