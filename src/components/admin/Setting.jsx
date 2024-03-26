import React, { useEffect, useState } from "react";
import { message, Drawer, Input, Button, Modal } from "antd";
import {
  ExclamationCircleTwoTone,
  CheckCircleTwoTone,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
} from "@ant-design/icons";
import { auth } from "../../firebase/config";
import firebase from "firebase/compat/app";
import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

const Setting = ({
  open,
  openUpdateAcc,
  setOpenUpdateAcc,
  openCheckPass,
  setOpenCheckPass,
  openUpdate,
  setOpenUpdate,
  confirm,
}) => {
  const [user, setUser] = useState();
  const [newPass, setNewPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [userChange, setUserChange] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await auth.currentUser;
        console.log(currentUser);
        const userData = await currentUser?.providerData;
        console.log(userData);
        if (userData) {
          setUser(userData[0]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      }
    };
    fetchUserData();
  }, []);

  const success = () => {
    Modal.success({
      content: "Vui lòng đăng nhập lại",
      onOk() {
        confirm();
      },
    });
  };
  const handleOpenUpdateAcc = () => {
    setOpenUpdateAcc(true);
  };
  const handleCancelAcc = () => {
    setOpenUpdateAcc(false);
  };
  const handleOpenCheckPass = () => {
    setOpenCheckPass(true);
  };

  const handleCheckPass = async (e) => {
    e.preventDefault();
    try {
      const currentUser = auth.currentUser;
      const credential = EmailAuthProvider.credential(
        currentUser.email,
        checkPass
      );
      await reauthenticateWithCredential(currentUser, credential);
      message.success("Mật khẩu chính xác");
      setUserChange(currentUser);
      setOpenUpdate(true);
      setOpenCheckPass(false);
    } catch (error) {
      console.error("Lỗi khi kiểm tra mật khẩu:", error);
      message.error({
        content: "Mật khẩu không chính xác",
        icon: <ExclamationCircleTwoTone twoToneColor="#ff0000" />,
      });
    }
  };

  const handleSubmitChangePass = async (e) => {
    e.preventDefault();
    try {
      if (newPass !== rePass) {
        message.error("Mật khẩu mới và xác nhận mật khẩu mới không khớp.");
        return;
      }
      if (newPass.length < 6) {
        message.error("Mật khẩu mới quá ngắn, vui lòng nhập lại.");
        return;
      }
      if (userChange) {
        await updatePassword(userChange, newPass);
        message.success("Đổi mật khẩu thành công!");
        handleCancelUpdate();
        success();
      }
    } catch (error) {
      console.error("Lỗi khi đổi mật khẩu:", error);
      message.error({
        content: "Có lỗi xảy ra khi đổi mật khẩu",
        icon: <ExclamationCircleTwoTone twoToneColor="#ff0000" />,
      });
    }
  };

  const handleCancelUpdate = () => {
    setOpenUpdate(false);
  };

  const handleCloseUpdate = () => {
    if (open) {
      setOpenUpdateAcc(false);
      setOpenCheckPass(false);
      setOpenUpdate(false);
    }
  };

  return (
    <>
      {user && (
        <>
          <div className="flex items-center gap-3 border-x px-2">
            <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border">
              {user?.photoURL ? (
                <img
                  className="w-full h-full rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <UserOutlined />
              )}
            </div>
            <div className="flex flex-col gap-0">
              <span className="text-lg">
                {user?.displayName ? user?.displayName : "Quản trị viên"}
              </span>
              <span className="text-sm font-light">{user?.uid}</span>
            </div>
          </div>
          <div
            onClick={handleOpenUpdateAcc}
            className="flex justify-center items-center py-2 border my-2 cursor-pointer hover:bg-[#f0f0f0]"
          >
            Chỉnh sửa thông tin tài khoản
          </div>
          {openUpdateAcc && (
            <form className="mt-2 pt-2 border-t">
              <h3 className="text-base text-center">
                Nhập thông tin tài khoản
              </h3>
              <div className="flex items-center justify-between">
                <div className="w-[100px] h-[100px] flex justify-center items-center rounded-xl border cursor-pointer">
                  {user?.photoURL ? (
                    <img
                      className="w-full h-full object-cover"
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <UserOutlined />
                  )}
                </div>
                <div>
                  <label
                    htmlFor="fileAvt"
                    className="w-[100px] h-[100px] flex justify-center items-center rounded-xl border !border-dashed cursor-pointer"
                  >
                    + Upload
                  </label>
                  <input hidden id="fileAvt" type="file" />
                </div>
                <span>Thay đổi ảnh</span>
              </div>
              <div>
                <label htmlFor="" className="mt-2">
                  Tên tài khoản
                </label>
                <Input
                  placeholder="tên người sử dụng"
                  prefix={<UserOutlined />}
                  defaultValue={user?.displayName}
                  name="name"
                />
                <label htmlFor="" className="mt-2">
                  Email
                </label>
                <Input
                  placeholder="email"
                  type="email"
                  prefix={<MailOutlined />}
                  defaultValue={user?.uid}
                  name="email"
                />
                <div className="flex items-center justify-between my-2 pb-2 border-b">
                  <Button
                    type="button"
                    onClick={handleCancelAcc}
                    className="bg-red-600 hover:bg-red-500"
                  >
                    <span className="text-white">Huỷ</span>
                  </Button>
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500"
                  >
                    <span className="text-white">Lưu</span>
                  </Button>
                </div>
              </div>
            </form>
          )}
          <div
            onClick={handleOpenCheckPass}
            className="flex justify-center items-center py-2 border my-2 cursor-pointer hover:bg-[#f0f0f0]"
          >
            Đổi mật khẩu đăng nhập
          </div>
          {openCheckPass && (
            <form
              className="flex flex-col gap-2 border-x p-2"
              onSubmit={handleCheckPass}
            >
              <label htmlFor="checkPass">Nhập mật khẩu hiện tại</label>
              <Input.Password
                placeholder="mật khẩu"
                className="border p-2 rounded-lg"
                value={checkPass}
                onChange={(e) => setCheckPass(e.target.value)}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <div className="flex items-center justify-between">
                <Button
                  className="bg-blue-500"
                  type="primary"
                  htmlType="submit"
                >
                  Check
                </Button>
                <span className=" hover:border-b hover:border-black cursor-pointer">
                  Quên mật khẩu?
                </span>
              </div>
            </form>
          )}
          {openUpdate && (
            <form
              onSubmit={handleSubmitChangePass}
              className="mt-2 border-t pt-2"
            >
              <h3 className="text-base text-center">
                Nhập mật khẩu đăng nhập mới
              </h3>
              <label htmlFor="passwordUpdate" className="mt-2">
                Mật khẩu mới
              </label>
              <Input
                count={{
                  show: true,
                  max: 15,
                }}
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
              />
              <label htmlFor="" className="mt-2">
                Nhập lại mật khẩu
              </label>
              <Input
                count={{
                  show: true,
                  max: 15,
                }}
                value={rePass}
                onChange={(e) => setRePass(e.target.value)}
              />
              <div className="flex items-center justify-between my-2 pb-2 border-b">
                <Button
                  type="button"
                  onClick={handleCancelUpdate}
                  className="bg-red-600 hover:bg-red-500"
                >
                  <span className="text-white">Huỷ</span>
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-600 hover:bg-blue-500"
                >
                  <span className="text-white">Lưu</span>
                </Button>
              </div>
            </form>
          )}
        </>
      )}
    </>
  );
};

export default Setting;
