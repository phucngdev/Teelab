import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/logo.png";
import icon_incart from "../../../../public/icon_incart.svg";
import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Search from "./Search";
import NavHeader from "../../../components/user/computer/NavHeader";
import SideBar from "../home/mobile/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { findAllData } from "../../../services/crud.service";

const Header = () => {
  const dispatch = useDispatch();
  const dataCategory = useSelector((state) => state.crud.data);
  const [dataCate, setDataCate] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDataCategory = async () => {
    try {
      await dispatch(findAllData("category"));
    } catch (error) {
      console.error("Error loading banner:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDataCategory();
  }, []);

  useEffect(() => {
    if (dataCategory) {
      const arr = Object.values(dataCategory);
      setDataCate(arr);
    }
  }, [dataCategory]);
  //   const cartHover = carts?.map((cart, index) => (
  //     <div
  //       onClick={() => navigate(`/chi-tiet-san-pham/${cart.id}`)}
  //       key={index}
  //       className="flex items-center justify-between gap-2 p-1 cursor-pointer rounded-md hover:bg-[#ededed]"
  //     >
  //       <img className="w-[70px] h-[70px]" src={cart.img} alt={cart.name} />
  //       <span className="text-left">{cart.name}</span>
  //       <span>x{cart.num}</span>
  //     </div>
  //   ));

  return (
    <header className="header">
      <div className="hidden md:block py-[5px] bg-[#f5f5f5]">
        <div className="container mx-auto flex justify-end">
          <form className="relative h-10 flex items-center">
            <Search />
          </form>
          <div className="h-full w-11 ms-2 relative group flex items-center justify-center">
            <Link to="/gio-hang" className="m-0">
              <Badge count={0} showZero>
                <Avatar shape="square" icon={<ShoppingCartOutlined />} />
              </Badge>
            </Link>
            <div className="group-hover:block rounded-sm shadow-lg bg-white absolute z-[99] top-[90%] right-0 hidden">
              <div className="w-[340px] max-h-[500px] overflow-scroll flex flex-col items-center  text-center p-2">
                {/* {carts.length > 0 ? (
                  <>{cartHover}</>
                ) : ( */}
                <>
                  <div className="flex flex-col justify-center items-center">
                    <img className="w-20 m-[15px]" src={icon_incart} alt="" />
                    <p className="mb-2">
                      Không có sản phẩm nào trong giỏ hàng của bạn
                    </p>
                  </div>
                </>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <SideBar />
      <div className="hidden md:block container mx-auto">
        <ul className="flex justify-evenly items-center h-[77px] border-b-[1px] border-solid border-gray-300 md:text-sm lg:text-base">
          <li>
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li>
            <Link to="/chinh-sach-doi-tra">CHÍNH SÁCH ĐỔI TRẢ</Link>
          </li>
          <li className="md:w-[160px] lg:w-[200px]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/bang-size">BẢNG SIZE</Link>
          </li>
          <li>
            <Link to="/he-thong-cua-hang">HỆ THỐNG CỬA HÀNG</Link>
          </li>
        </ul>
        <div className="container mx-auto flex items-center justify-center md:h-[112px] lg:h-[56px]">
          <ul className="flex flex-wrap justify-center items-center h-full md:text-sm">
            <NavHeader dataCate={dataCate} loading={loading} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
