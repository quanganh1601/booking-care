import "./index.scss";
import { Input, Form, Button, message } from "antd";
import iconGG from "../../assets/image/icon-gg.png";
import iconFb from "../../assets/image/icon-face.png";
import axios from "axios";

const Login = () => {

  const handleLogin = (params) => {
    console.log("params", params)
    return axios.post("http://localhost:6969/login", params).then((res) => {
      if (res.data.success) {
        const { token, refreshToken } = res.data.user;
        setCookie("token", token, 365);
        setCookie("refresh_token", refreshToken, 365);
        window.location.replace('/admin/users');
      } else {
        message.error("email hoặc mật khẩu không khớp")
      }
    })
  };

  const setCookie = (cookieName, cookieValue, expirationDays) => {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  };

  return (
    <div className="container-login">
      <div className="content">
        <div className="title">Đăng nhập</div>
        <Form className="login-form" layout="vertical" onFinish={handleLogin}>
          <Form.Item
            label="Email"
            name="email"
          >
            <Input placeholder="Nhập email"/>
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
          >
            <Input.Password placeholder="Nhập mật khẩu"/>
          </Form.Item>
          <Form.Item>
            <a className="forgot-password">{"Forgot password?"}</a>
            <Button
              className="btn-submit"
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
          {"hoặc đăng nhập bằng"}
          <Form.Item>
            <div className="show-icon">
              <img src={iconFb} style={{ height: 25, width: 25 }}/>
              <img src={iconGG} style={{ height: 25, width: 25 }}/>
            </div>
          </Form.Item>
          <div>{"Bạn chưa có tài khoản?"}{" "}<a>{"Đăng ký"}</a></div>
        </Form>
      </div>
    </div>
  );
};

export default Login;