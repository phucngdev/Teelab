import React, { useEffect, useState } from "react";
import { findAllData } from "../../services/crud.service";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";

const Category = ({ setType }) => {
  const dispatch = useDispatch();
  const dataCate = useSelector((state) => state.crud.data);
  const [cate, setCate] = useState();

  const loadDataCategory = () => {
    dispatch(findAllData("category"));
  };

  useEffect(() => {
    loadDataCategory();
  }, []);

  useEffect(() => {
    if (dataCate && Object.keys(dataCate).length > 0) {
      const arr = Object.values(dataCate);
      const options = arr.map((item) => ({
        value: item.key,
        label: item.text,
      }));
      setCate(options);
    }
  }, [dataCate]);

  const handleChange = (value) => {
    setType(value);
  };
  return (
    <>
      <div className="flex flex-col gap-2 w-[30%]">
        <div>Danh mục sản phẩm</div>
        <Select defaultValue={2} onChange={handleChange} options={cate} />
      </div>
    </>
  );
};

export default Category;
