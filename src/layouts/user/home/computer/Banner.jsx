import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllBanner } from "../../../../services/banner.service";
import { Carousel, Skeleton } from "antd";

const Banner = () => {
  const dispatch = useDispatch();
  const dataBanner = useSelector((state) => state.banner.data);
  const [banner, setBanner] = useState([]);
  console.log("banner", banner);

  const loadDataBanner = async () => {
    await dispatch(findAllBanner());
  };

  useEffect(() => {
    loadDataBanner();
  }, []);

  useEffect(() => {
    if (dataBanner) {
      const data = Object.values(dataBanner);
      setBanner(data);
    }
  }, [dataBanner]);

  return (
    <>
      {banner ? (
        <div className="w-[85%] mx-auto">
          <Carousel autoplay>
            {banner?.map((bn, index) => (
              <img
                key={index}
                src={bn}
                alt=""
                className="w-full h-full object-cover"
              />
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="flex justify-center">
          <Skeleton.Image />
        </div>
      )}
    </>
  );
};

export default Banner;
