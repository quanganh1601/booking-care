import { message } from "antd";
import { LANGUAGE, GET_USERS, DELETE_USERS, CREATE_USER, UPDATE_USER } from "../constant/index";
import axios from "axios";

export const changeLanguage = (language) => (dispatch) => {
  dispatch({
    type: LANGUAGE,
    payload: language
  });
};

export const getUsers = (accessToken, params) => (dispatch) => {
  const url = `http://localhost:6969/api/get-users?access_token=${accessToken}`;
  return axios.get(url, {params}).then((res) => {
    if (res.status == 200) {
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
      return res.data;
    }
  })
  .catch(() => message.error("Lỗi không xác định"))
};

export const deleteUser = (id) => (dispatch) => {
  return axios.delete(`http://localhost:6969/api/delete-user/${id}`).then((res) => {
    if (res.status == 200) {
      dispatch({
        type: DELETE_USERS,
        payload: id
      });
      return res;
    }
  })
};

export const createUsers = (params) => (dispatch) => {
  return axios.post("http://localhost:6969/api/create-new-user", params)
  .then((res) => {
    if (res.data.success) {
      dispatch({
        type: CREATE_USER,
        payload: res.data.data
      })
      return res.data;
    }
  })
  .catch(() => message.error("Tạo thất bại!"))
};

export const updateUsers = (params) => (dispatch) => {
  return axios.put("http://localhost:6969/api/edit-user", params).then((res) => {
    if (res) {
      dispatch({
        type: UPDATE_USER,
        payload: params
      });
      return res.data;
    }
  })
};
