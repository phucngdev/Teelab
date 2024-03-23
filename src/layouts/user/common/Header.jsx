import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../../../../public/logo.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import icon_incart from "../../../../public/icon_incart.svg";
import { Avatar, Badge } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { findAllData } from "../../../services/crud.service";
import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch();
  const dataCategory = useSelector((state) => state.crud.data);
  const [dataCate, setDataCate] = useState();
  const [showMenu, setShowMenu] = useState(false);
  console.log(dataCategory);
  console.log("dataCate :", dataCate);

  const loadDataCategory = () => {
    dispatch(findAllData("category"));
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

  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);

  const listMenu = dataCate?.map((item, index) => (
    <li key={index} className="">
      <Link
        to={item.link}
        className="pt-[15px] px-[15px] pb-[17px] hover:text-[#707070]"
      >
        {item.text}
      </Link>
    </li>
  ));

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
            <Search></Search>
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
      <div className="w-full h-[46px] flex items-center fixed top-0 py-[5px] px-2 md:hidden bg-[#f5f5f5] z-50">
        <ul className="container flex justify-between items-center">
          <li>
            <Button
              className="border-0 rotate-[180deg]"
              variant="primary"
              onClick={handleShow}
            >
              <MenuOutlined />
            </Button>
            <Offcanvas
              show={showMenu}
              onHide={handleClose}
              style={{ maxWidth: "45%" }}
            >
              <Offcanvas.Header closeButton className="pb-0">
                <Offcanvas.Title className="sm:text-[40px]">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="">
                <ul className="menu list-disc text-base ps-3 sm:text-2xl">
                  <li className="my-[5px]">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li className="my-[5px]">
                    <Link to="/tat-ca-san-pham" className="">
                      Tất cả sản phẩm
                      <ul className="ms-[15px] sm:ps-5 list-disc">
                        <li className="my-[5px]">
                          <Link to="/ao-thun">Áo thun</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/ao-polo">Áo polo</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/baby-tee">Baby Tee</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/ao-so-mi">Áo sơ mi</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/ao-khoac">Áo khoác</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/hoodie">Hoodie</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/quan">Quần</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/quan-nu">Quần nữ</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/phu-kien">Phụ kiện</Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li className="my-[5px]">
                    <Link to="/chinh-sach-doi-tra">Chính sách Đổi trả</Link>
                  </li>
                  <li className="my-[5px]">
                    <Link to="/bang-size">Bảng Size</Link>
                  </li>
                  <li className="my-[5px]">
                    <Link to="/kiem-tra-don-hang">Kiểm tra đơn hàng</Link>
                  </li>
                  <li className="my-[5px]">
                    <Link to="/he-thong-cua-hang">Hệ thống Cửa hàng</Link>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </li>
          <li className="w-[150px]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Badge count={0}>
              <Avatar shape="square" icon={<ShoppingCartOutlined />} />
            </Badge>
          </li>
        </ul>
      </div>
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
            {listMenu}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
