import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllData } from "../../../services/crud.service";
import { Carousel, Skeleton } from "antd";

const Banner = () => {
  const dispatch = useDispatch();
  const dataBanner = useSelector((state) => state.crud.data);
  const [banner, setBanner] = useState();
  const [loading, setLoading] = useState(true);
  console.log(banner);

  const loadDataBanner = async () => {
    try {
      await dispatch(findAllData("banner"));
    } catch (error) {
      console.error("Error loading banner:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDataBanner();
  }, []);

  useEffect(() => {
    if (dataBanner) {
      const arr = Object.values(dataBanner);
      setBanner(arr);
    }
  }, [dataBanner]);
  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <Skeleton.Image />
        </div>
      ) : (
        <div className="w-full ">
          <Carousel autoplay>
            {banner?.map((bn, index) => (
              <div key={index} className="">
                <img src={bn} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default Banner;
