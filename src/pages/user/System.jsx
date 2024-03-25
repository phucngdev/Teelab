import React from "react";
import { Helmet } from "react-helmet";

const content = [
  {
    title: "T E E L A B",
    content: [
      "▪️ Website: https://teelab.vercel.app/",
      "▪️ Shopee Mall: https://shopee.vn/teelab",
      "▪️ Lazada Mall: https://lazada.vn/shop/teelab",
    ],
  },
  {
    title: "HỆ THỐNG CỬA HÀNG",
    content: [
      "▪️ CS1 - Thái Nguyên: 235 Quang Trung, TP Thái Nguyên",
      "▪️ CS2 - Thái Nguyên: 599 Lương Ngọc Quyến, TP Thái Nguyên",
      "▪️ CS3 - Thái Bình: 161 Hai Bà Trưng, TP Thái Bình",
      "▪️ CS4 - Vĩnh Phúc: 06 Mê Linh, TP Vĩnh Yên",
      "▪️ CS5 - Hải Dương: 09 Nguyễn Thị Duệ, TP Chí Linh",
    ],
  },
];

const System = () => {
  return (
    <>
      <Helmet>
        <title>Hệ thống cửa hàng | TEELAB</title>
      </Helmet>
      <div className="container mx-auto px-[15px] mt-[56px] mb-[30px]">
        <h1 className="text-[40px] text-[#333] mb-5 font-light">
          Hệ thống cửa hàng
        </h1>
        <div>
          {content.map((text, index) => (
            <div className="md:ms-10">
              <div key={index} className="mb-4">
                <span className="text-[#333] text-[14px] font-extrabold">
                  {text.title}
                </span>
              </div>
              {text.content.map((text, index) => (
                <div key={index} className="mb-4">
                  <span className="text-[#333] text-[14px] font-normal">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          ))}
          <p className="mb-4">
            <span className="text-[#333] text-[14px] font-extrabold">
              TEELAB
            </span>
          </p>
          <p className="mb-4">
            <span className="text-[#333] text-[14px] font-extrabold">
              Experiment on Your Style
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default System;
