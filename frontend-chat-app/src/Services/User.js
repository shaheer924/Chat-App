import axios from "./BaseServices";

export const GetAllUsers =() => axios.get(`/users`)
export const Login = (data) => axios.post(`/user/login`, data)
export const Register = (data) => axios.post(`/user/register`, data)