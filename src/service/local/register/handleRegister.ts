import { RegisterInterface } from "../../interface/local/register.interface";
import { API } from "../../../api/API";
const requestAPI = new API();

const handleRegister = (e: any, registerData: RegisterInterface) => {
  e.preventDefault();
  console.log(registerData);
  alert("register handler");
  requestAPI.getUsersInfo().then((response) => console.log(response.data));
};

export default handleRegister;
