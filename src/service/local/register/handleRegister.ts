import { RegisterInterface } from "../../interface/local/register.interface";

const handleRegister = (e: any, registerData: RegisterInterface) => {
  e.preventDefault();
  console.log(registerData);
  alert("register handler");
};

export default handleRegister;
