import "./index.scss"
import { Menu } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("user")
  const items = [
    {
      label: <Link to={"/admin/users"}>{"Người dùng"}</Link>,
      key: "user",
      children: [
        {
          label: "CRUD user",
          key: "crud_user"
        },
        {
          label: "CRUD Redux",
          key: "crud_redux"
        },
        {
          label: <Link to={"/manage-doctor"}>{"Quản lý bác sỹ"}</Link>,
          key: "manage_doctor"
        },
        {
          label: "Quản lý kế hoạch khám bệnh",
          key: "manage_medical"
        }
      ]
    },
    {
      label: "Phòng khám",
      key: "clinic",
    },
    {
      label: "Chuyên khoa",
      key: "specialist",
    },
    {
      label: "Cẩm nang",
      key: "handlbook",
    }
  ];

  const handleMenu = (e) => {
    setCurrent(e.key)
  };

  return (
    <Menu
      className="menu-admin"
      items={items}
      mode={"horizontal"}
      selectedKeys={[current]}
      onClick={handleMenu}
    />
  )
};

export default Header;