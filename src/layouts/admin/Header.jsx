import React, { useState } from "react";
import { message, Popconfirm, Tooltip, Drawer, Badge, Avatar } from "antd";
import {
  ExclamationCircleTwoTone,
  CheckCircleTwoTone,
  UserOutlined,
  LogoutOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Setting from "../../components/admin/Setting";
import { auth } from "../../firebase/config";

const Header = ({ user }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openUpdateAcc, setOpenUpdateAcc] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openCheckPass, setOpenCheckPass] = useState(false);
  const onClose = () => {
    setOpen(false);
    setOpenUpdateAcc(false);
    setOpenUpdate(false);
    setOpenCheckPass(false);
  };
  const confirm = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      message.success({
        content: "Đăng xuất thành công",
        icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
      });
    } catch (error) {
      console.error("Error signing out:", error);
      message.error("Lỗi đăng xuất!");
    }
    navigate("/dang-nhap");
  };
  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <header className="w-[calc(100%-320px)] h-[56px] bg-white border-b flex justify-between items-center px-8 fixed top-0 left-[320px] z-[99] shadow-md">
        <h3 className="flex items-center">Quản trị viên</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Tooltip title="Email">
              <Badge count={1000} overflowCount={999}>
                <Avatar icon={<MailOutlined />} shape="square" size="default" />
              </Badge>
            </Tooltip>
          </div>
          <Tooltip title="Thông tin admin">
            <div
              className="flex items-center gap-2 border-x px-3 cursor-pointer"
              onClick={showDrawer}
            >
              <div className="w-9 h-9 rounded-full flex justify-center items-center border">
                {user.photoURL !== "" ? (
                  <img
                    className="w-9 h-9 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <UserOutlined />
                )}
              </div>
              <span>{user.displayName}</span>
            </div>
          </Tooltip>
          <Drawer title="Thông tin tài khoản" onClose={onClose} open={open}>
            <Setting
              user={user}
              open={open}
              openUpdateAcc={openUpdateAcc}
              openUpdate={openUpdate}
              openCheckPass={openCheckPass}
              setOpenUpdateAcc={setOpenUpdateAcc}
              setOpenUpdate={setOpenUpdate}
              setOpenCheckPass={setOpenCheckPass}
              confirm={confirm}
            ></Setting>
          </Drawer>
          <Popconfirm
            placement="topLeft"
            icon={<ExclamationCircleTwoTone twoToneColor="#eb2f96" />}
            title="Xác nhân"
            description="Bạn chắc chắn muốn đăng xuất khỏi thiết bị"
            okText={<span className="text-white">Đăng xuất</span>}
            cancelText="Huỷ"
            onConfirm={confirm}
            okButtonProps={{
              className: "bg-red-500 text-white hover:bg-red-400",
              type: "button",
            }}
          >
            <Tooltip title="Đăng xuất">
              <LogoutOutlined />
            </Tooltip>
          </Popconfirm>
        </div>
      </header>
    </>
  );
};

export default Header;
