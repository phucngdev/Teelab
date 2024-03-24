import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import icon_incart from "../../../../public/icon_incart.svg";
import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const TopHeader = () => {
  return (
    <>
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
    </>
  );
};

export default TopHeader;
