import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, message } from "antd";
import { CheckCircleTwoTone, ShoppingCartOutlined } from "@ant-design/icons";
import { findAllData } from "../../../services/crud.service";
import IconOption from "./IconOption";

const ListProducts = (data) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataProducts = useSelector((state) => state.crud.data);
  const [products, setProducts] = useState([]);
  const [optionFocus, setOptionFocus] = useState("");
  const [selected, setSelected] = useState("");

  const loadData = async () => {
    if (data) {
      await dispatch(findAllData(data.data));
    }
  };

  useEffect(() => {
    loadData();
  }, [data]);

  useEffect(() => {
    if (dataProducts) {
      const productValues = Object.values(dataProducts);
      setProducts(productValues);
    }
  }, [dataProducts]);

  // thay đổi active của product
  const handleRadioChange = (e, itemId) => {
    setSelectedItemId(itemId);
    setSelectedIcon(e.target.value);
  };

  const confirm = () => {
    message.success({
      content: "Thêm vào giỏ hàng thành công",
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-7 xl:grid-cols-4 md:grid-cols-3">
      {products?.map((item, index) => (
        <div
          key={index}
          className="group flex flex-col items-center relative hover:cursor-pointer "
        >
          <div className="">
            <img
              className="w-full h-full object-contain hover:opacity-0"
              src={
                selected == item?.id && optionFocus ? optionFocus : item?.img
              }
              alt={item?.name}
            />
          </div>
          <div className="imgHover opacity-[0.01] transition-opacity duration-500 absolute z-50 top-0 left-0 hover:opacity-100">
            <button
              onClick={() => navigate(`/chi-tiet-san-pham/${item?.id}`)}
              className="w-full h-full"
            >
              <img
                className="w-full h-full object-contain"
                src={item?.imgHover}
                alt=""
              />
            </button>
          </div>
          {item?.quantity > 0 ? (
            <>
              <Tooltip title="Thêm vào giỏ hàng">
                <div className="group-hover:block absolute top-[10px] right-[15px] z-50 hidden animate-bounce">
                  <ShoppingCartOutlined />
                </div>
              </Tooltip>
            </>
          ) : (
            <>
              <div className="w-full text-center absolute z-[999] top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <span className="px-5 py-2 bg-black shadow-lg text-white ">
                  SOLD OUT
                </span>
              </div>
            </>
          )}
          <div className="w-[46px] h-[18px] bg-[#d52220] absolute top-[15px] left-[15px] text-center text-xs text-white">
            {item?.sale}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-[10px] mb-[10px]">
              <IconOption
                item={item}
                setOptionFocus={setOptionFocus}
                setSelected={setSelected}
              />
            </div>
            <h3 className="text-base font-normal text-[#333] text-center mb-[10px] hover:text-[#dc3545]">
              <button
                onClick={() => navigate(`/chi-tiet-san-pham/${item?.id}`)}
              >
                {item?.name}
              </button>
            </h3>
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-[#d52220] text-base">{item?.price}</span>
              <span className="text-[#9e9e9e] text-base line-through">
                {item?.priceBefore}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
