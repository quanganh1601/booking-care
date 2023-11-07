import "./index.scss";
import { Table, Input, Upload, Modal, Button, message, Select, Image } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getUsers, deleteUser, createUsers, updateUsers } from "../../action";
import { connect } from "react-redux";
import { Buffer } from 'buffer';

const MangeUsers = (props) => {
  const { users, getUsers, deleteUser, updateUsers, accessToken } = props;
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageDataUrl] = useState();
  const { confirm } = Modal;

  useEffect(() => {
    getUsers(accessToken, { limit: 30, page: 1 });
  }, []);

  useEffect(() => {
    if (!visible)
      setSelected({});
  }, [visible])

  const handleUpload = (info) => {
    if (info.file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64DataUrl = e.target.result;
        setSelected({ ...selected, image: base64DataUrl })
      };
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  const fields = [
    {
      label: "Họ",
      name: "firstName",
      placeholder: "Nhập họ"
    },
    {
      label: "Tên",
      name: "lastName",
      placeholder: "Nhập tên"
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Nhập email",
      disable: true
    },
    {
      label: "Số điện thoại",
      name: "phoneNumber",
      placeholder: "Nhập số điện thoại"
    },
    {
      label: "Mật khẩu",
      name: "password",
      placeholder: "Nhập mật khẩu",
      disable: true
    },
    {
      label: "Nhập lại mật khẩu",
      name: "password",
      placeholder: "Nhập lại mật khẩu",
      disable: true
    },
    {
      label: "Chức danh",
      name: "positionId",
      placeholder: "Chức danh"
    },
    {
      label: "Giới tính",
      name: "gender",
      placeholder: "Nhập giới tính"
    },
    {
      label: "Địa chỉ",
      name: "address",
      placeholder: "Nhập địa chỉ",
      className: "input-address"
    },
    {
      label: "Ảnh đại diện",
      name: "image",
      placeholder: "Chọn ảnh",
      className: "show-image"
    }
  ];

  const onChangeValue = (key, e) => setSelected({ ...selected, [key]: e.target.value });

  const getOptions = (key) => {
    switch (key) {
      case "gender":
        return [
          { value: "M", label: "Nam" },
          { value: "F", label: "Nữ" },
          { value: "0", label: "Khác" }
        ];
    
      case "positionId":
        return [
          {
            value: "P0", label: "Bác sỹ"
          },
          {
            value: "P1", label: "Thạc sỹ"
          },
          {
            value: "P2", label: "Tiến sỹ"
          },
          {
            value: "P3", label: "Phó giáo sư"
          },
          {
            value: "P4", label: "Giáo sư"
          }
        ]
    }
  }

  const renderInput = (field) => {
    const disable = selected.id && field.disable;

    switch (field.name) {
      case "password":
        return (
          <Input.Password
            value={selected[field.name]}
            placeholder={field.placeholder}
            onChange={(e) => onChangeValue(field.name, e)}
            disabled={disable}
          />
        )
      
      case "image":
        return (
          <Upload
            name="image"
            accept=".jpg,.jpeg,.png"
            showUploadList={false}
            onChange={handleUpload}
            className="upload-image"
          >
            {
              selected.image ? (
                <img src={selected.image} alt={selected.image} style={{ height: 100, width: 100 }}/>
              ) : (
                <div className="display-image">
                  {<PlusOutlined />}
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              )
            }
          
          </Upload>
        );

      case "positionId":
      case "gender":
        const options = getOptions(field.name)
        return (
          <Select
            value={selected[field.name]}
            placeholder={field.placeholder}
            className="show-select"
            onChange={(value) => setSelected({ ...selected, [field.name]: value })}
          >
            {options.map((option, index) => (
              <Select.Option key={index} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        )
    
      default:
        return (
          <Input
            value={selected[field.name]}
            placeholder={field.placeholder}
            onChange={(e) => onChangeValue(field.name, e)}
            disabled={disable}
          />
        )
    }
  }

  const renderFormInput = () => {
    return (
      <div className="row">
        {fields.map((field, index) => {
          return (
            <div key={index} className={`item ${field.className ? field.className : ""}`}>
              <span className="render-title">{field.label}</span>
              {renderInput(field)}
            </div>
          )
        })}
      </div>
    )
  };

  const onOk = async() => {
    setVisible(false);
    let action = "createUsers";
    if (selected?.id) action = "updateUsers";
    setLoading(true);
    await props[action](selected).then((res) => {
      if (res) {
        selected?.id
          ? message.success("Tạo thành công")
          : message.success("Cập nhật thành công")
      }
      setSelected({});
      setLoading(false)
      setVisible(false);
    })
  }

  const renderModalEdit = () => {
    return (
      <Modal
        open={visible}
        title={"Chỉnh sửa người dùng"}
        width={600}
        onCancel={() => setVisible(false)}
        onOk={() => onOk()}
        confirmLoading={loading}
      >
        <div className="modal-content">
          {renderFormInput()}
        </div>
      </Modal>
    )
  };

  const handleDelete = (id) => {
    deleteUser(id).then((res) => {
      if (res) {
        message.success("Xóa thành công")
      }
    })
  }

  const showModalDelete = (id) => {
    return (
      confirm({
        title: 'Bạn có đồng ý xóa bản ghi này không?',
        icon: <ExclamationCircleFilled />,
        content: "Hành động xóa bản ghi này sẽ không được hoàn tác!",
        onOk() {
          handleDelete(id)
        },
        onCancel() {
          console.log('Cancel');
        },
      })
    )
  }

  const onEditUser = (record) => {
    let base64Link = record.image;
    if (record.image && record.image.data)
      base64Link = new Buffer.from(record.image, "base64").toString('binary')
    setVisible(true);
    setImageDataUrl(base64Link);
    setSelected({ ...record, password: "hardcode", image: base64Link });
  };

  const dataSources = users.map((user, index) => ({ ...user, key: index }))

  const columns = [
    {
      title: "Họ",
      dataIndex: "firstName",
      key: "first_name"
    },
    {
      title: "Tên",
      dataIndex: "lastName",
      key: "full_name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phone_number"
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "image",
      key: "image",
      render: (value) => {
        if (value && value.data)
          value = new Buffer.from(value.data, "base64").toString('binary')
        return value ? <Image src={value} height={30} width={30} /> : null
      }
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      align: "center",
      width: 120,
      render: (value, record) => {
        return (
          <div className="action">
            <EditOutlined className="edit-user" onClick={() => onEditUser(record)}/>
            <DeleteOutlined className="delete-ser" onClick={() => showModalDelete(record.id)}/>
          </div>
        )
      }
    }
  ];

  return (
    <div className="content-users">
      <div className="title-user">{"Quản lý người dùng"}</div>
      <Button
        icon={<PlusOutlined />}
        type="primary"
        className="btn-create"
        onClick={() => setVisible(true)}
      >
        {"Tạo mới người dùng"}
      </Button>
      <Table columns={columns} dataSource={dataSources} />
      {renderModalEdit()}
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.reducer.users
});

export default connect(mapStateToProps, { getUsers, deleteUser, createUsers, updateUsers })(MangeUsers);