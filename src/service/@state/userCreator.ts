import { atom } from "recoil";

export const createNewUserState = atom({
  key: "createNewUserState",
  default: { email: "", nickname: "", password: "", birth: "", hp: "" },
});
