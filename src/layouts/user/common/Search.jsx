import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllData } from "../../../services/crud.service";
import Select from "react-select";

const Search = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.crud.data);
  console.log(data);
  const [searchText, setSearcText] = useState([]);
  console.log("searchText :", searchText);

  const loadData = () => {
    dispatch(findAllData("products"));
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (data) {
      const arr = Object.values(data);
      setSearcText(arr);
    }
  }, [data]);

  const searchOption = searchText.map((province) => ({
    value: province.id,
    label: province.name,
    // imgSrc: province.img,
  }));
  const formatOptionLabel = ({ value, label }) => (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => navigate(`/chi-tiet-san-pham/${value}`)}
    >
      {/* <img src={imgSrc} alt={label} className="w-10 " /> */}
      {label}
    </div>
  );
  return (
    <>
      <Select
        className="w-[400px]"
        value={searchOption.find((option) => option.name === searchText)}
        placeholder="Tìm kiếm"
        options={searchOption}
        formatOptionLabel={formatOptionLabel}
      />
    </>
  );
};

export default Search;
