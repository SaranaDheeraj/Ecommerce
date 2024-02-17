import { atom } from "recoil";

export const signedInState = atom({
  key: "signedInState",
  default: localStorage.getItem("token") !== null,
});
export const userId = atom({
  key: "userid",
  default: parseInt(localStorage.getItem("id") || "0"),
});
export const cartItems = atom<any[]>({
  key: "items",
  default: [],
});
