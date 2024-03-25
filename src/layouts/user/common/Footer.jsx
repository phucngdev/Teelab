import React from "react";
import {
  system,
  home,
  tableSize,
  service,
  checkOrder,
  serviceBuy,
  serviceSecure,
  serviceChange,
  serviceShip,
  paymentMethods,
} from "../../../constants/path";
import { Link } from "react-router-dom";
import logo_footer from "../../../../public/logo_footer.png";
import license from "../../../../public/license.png";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { FB, TT, IG, LZD, SP } from "../../../constants/platform";

const Footer = () => {
  const aboutUs = [system, home, tableSize, service, checkOrder];
  const serviceList = [
    serviceBuy,
    serviceSecure,
    serviceChange,
    serviceShip,
    paymentMethods,
  ];
  const platform = [FB, TT, IG, LZD, SP];
  const listRoute = (arr) =>
    arr.map((item, index) => (
      <div key={index} className="mb-[15px] md:text-left">
        <Link
          to={item.path}
          className="text-sm md:text-base text-[#999999] hover:text-red-500"
        >
          {item.text}
        </Link>
      </div>
    ));

  return (
    <>
      <footer className="bg-black">
        <div className="container mx-auto flex flex-wrap justify-between py-10 text-[#999]">
          <div className="w-full md:w-full lg:w-[30%] text-[9px] px-[15px]">
            <img className="mb-[25px]" src={logo_footer} alt="" />
            <b className="text-sm">HKD Vũ Thị Quỳnh Anh</b>
            <br />
            Giấy chứng nhận đăng ký HKD số 17A80041952 do Phòng Tài chính - Kế
            hoạch, Uỷ ban nhân dân thành phố Thái Nguyên cấp ngày 30/5/2019{" "}
            <br /> Địa chỉ: Số 235, Đường Quang Trung, Tổ 7, Phường Tân Thịnh,
            Thành phố Thái Nguyên, Tỉnh Thái Nguyên, Việt Nam <br /> Email:
            teelabvn@gmail.com <br /> Điện thoại: 0865539083
            <img className="max-w-[175px] mt-5" src={license} alt="" />
          </div>
          <div className="w-full md:w-full lg:w-[35%] px-[15px] text-center">
            <h4 className="text-base font-bold mt-1 mb-6">ĐĂNG KÝ</h4>
            <form className="relative mb-5">
              <Input
                className="ps-5 pe-[45px] h-10 rounded-none"
                placeholder="Nhập đại chỉ email"
              />
              <button className="absolute top-[3px] right-[3px] h-[34px] w-[34px] bg-[#646464] flex items-center justify-center">
                <SendOutlined className="text-white" />
              </button>
            </form>
            <p className="text-base mb-4">
              Theo dõi Teelab từ các nền tảng khác nhau nhé!
            </p>
            <div className="flex items-center gap-[9px] justify-center">
              {platform.map((item, index) => (
                <Link key={index} to={item.path}>
                  <img src={item.logo} alt="" />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full md:w-full lg:w-[17.5%] ps-[50px] pe-[15px]">
            <h4 className="text-base font-bold mt-1 mb-6">ABOUT US</h4>
            {listRoute(aboutUs)}
          </div>
          <div className="w-full md:w-full lg:w-[17.5%] px-[15px]">
            <h4 className="text-base font-bold mt-1 mb-6">CHÍNH SÁCH</h4>
            {listRoute(serviceList)}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
