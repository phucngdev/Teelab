import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import UploadImage from "./UploadImage";
import UploadImages from "./UploadImages";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import UploadImageHover from "./UploadImageHover";
import Category from "./Category";

const ModalAddProduct = ({ isModalOpen, setIsModalOpen }) => {
  const [imageUpload, setImageUpload] = useState(""); // img
  const [imageHover, setImageHover] = useState(""); // img hover
  const [type, setType] = useState(0); // category
  const [uploadedImages, setUploadedImages] = useState([
    // list img
    "https://bizweb.dktcdn.net/100/415/697/products/img-9361-1.jpg?v=1711198847317",
    "https://bizweb.dktcdn.net/100/415/697/products/img-9361-1.jpg?v=1711198847317",
    "https://bizweb.dktcdn.net/100/415/697/products/img-9361-1.jpg?v=1711198847317",
    "https://bizweb.dktcdn.net/100/415/697/products/img-9361-1.jpg?v=1711198847317",
    "https://bizweb.dktcdn.net/100/415/697/products/img-9361-1.jpg?v=1711198847317",
    "https://bizweb.dktcdn.net/100/415/697/products/img-9361-1.jpg?v=1711198847317",
  ]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        open={isModalOpen}
        width={900}
        onCancel={handleCancel}
        footer={null}
        title="Thêm mới sản phẩm"
      >
        <div className="text-base mt-2 pt-2 border-t">
          <ExclamationCircleOutlined className="text-green-500" /> Thông tin sản
          phẩm
        </div>
        <div className="flex justify-between gap-3">
          <UploadImage
            imageUpload={imageUpload}
            setImageUpload={setImageUpload}
          />
          <UploadImageHover
            imageHover={imageHover}
            setImageHover={setImageHover}
          />
          <UploadImages
            uploadedImages={uploadedImages}
            setUploadedImages={setUploadedImages}
          />
        </div>
        <div className="flex items-center gap-10 justify-between w-full mt-2">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">Tên sản phẩm</label>
            <Input className="w-full]" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">Mã sản phẩm</label>
            <Input className="w-full]" />
          </div>
        </div>
        <div className="flex items-end gap-10 justify-between w-full mt-2">
          <Category setType={setType} />
          <div className=" flex items-center gap-5">
            <Button type="" className="" onClick={() => handleCancel()}>
              Huỷ
            </Button>
            <Button type="primary" className="bg-blue-500">
              Tiếp theo
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddProduct;
