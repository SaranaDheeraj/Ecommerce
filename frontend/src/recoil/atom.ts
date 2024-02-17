import { atom } from "recoil";

export const signedInState = atom({
  key: "signedInState",
  default: localStorage.getItem("token") !== null,
});
