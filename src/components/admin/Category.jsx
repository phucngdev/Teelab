import React from "react";
import { Select } from "antd";

const options = [
  {
    label: "Áo thun",
    value: 1,
  },
  {
    label: "Baby Tee",
    value: 2,
  },
  {
    label: "Áo polo",
    value: 3,
  },
  {
    label: "Áo sơ mi",
    value: 4,
  },
  {
    label: "Áo khoác",
    value: 5,
  },
  {
    label: "Hoodie",
    value: 6,
  },
  {
    label: "Quần",
    value: 7,
  },
  {
    label: "Quần nữ",
    value: 8,
  },
  {
    label: "Phụ kiện",
    value: 9,
  },
];
const Category = ({ setType }) => {
  const handleChange = (value) => {
    setType(value);
  };
  return (
    <>
      <div className="flex flex-col gap-2 w-[30%]">
        <div>Danh mục sản phẩm</div>
        <Select defaultValue={1} onChange={handleChange} options={options} />
      </div>
    </>
  );
};

export default Category;
