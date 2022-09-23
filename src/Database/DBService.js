import axios from "axios";

let url = "http://127.0.0.1:8088/api/user";

export const registerUser = (userObject) => {
  console.log({ userObject });
  return axios.post(url, userObject);
};

export const getAllUsers = () => {
  return axios.get(url);
};
