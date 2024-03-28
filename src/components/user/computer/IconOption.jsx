import React, { useMemo, useState } from "react";

const IconOption = ({ item, setOptionFocus, setSelected }) => {
  const [option, setOption] = useState([]);
  const memoData = useMemo(() => {
    return item && setOption(Object.values(item?.imgIcon));
  }, [item]);
  const handleChangeOptionFocus = (url) => {
    setOptionFocus(url);
    setSelected(item.id);
  };
  return (
    <>
      {option.map((icon, iconIndex) => (
        <div key={iconIndex} className="relative w-8 h-8">
          <button
            className="w-full h-full absolute z-20 rounded-full border-[1px] border-red-500 cursor-pointer"
            onClick={() => handleChangeOptionFocus(icon.iconImg)}
          >
            <img
              className="w-7 h-7 rounded-[100%] object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              src={icon.iconImg}
              alt=""
            />
          </button>
        </div>
      ))}
    </>
  );
};

export default IconOption;
