import React, { useRef, useEffect, useState } from "react";
import logo from "/logo.png";
import { Button, Form, Input, message } from "antd";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from "@ant-design/icons";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";

const Login = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [account, setAccount] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Đăng nhập thành công",
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Tên đăng nhập và mật khẩu không chính xác",
      icon: <ExclamationCircleTwoTone twoToneColor="#ff0000" />,
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      const userCreate = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCreate.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/admin");
      message.success("Welcome back!");
    } catch (error) {
      console.log(error);
      message.error("Đăng nhập thất bại!");
    }
  };

  return (
    <>
      <Helmet>
        <title>TEELAB - Đăng nhập</title>
      </Helmet>
      {contextHolder}
      <div className="flex justify-center items-center h-[100vh] bg-[url('https://www.mbbank.com.vn/images/hp_bg_special_product.png')]">
        <div className="flex w-[500] bg-white shadow-xl flex-col justify-center items-center gap-3 border p-3 rounded-md">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <h3 className="font-semibold text-xl py-2 border-b">
            Đăng nhập quản trị viên
          </h3>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={handleSubmit}
          >
            <Form.Item
              label="email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                className="border"
                ref={inputRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                className="border"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-600 mt-3"
              >
                <span className="text-white">Đăng nhập</span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
