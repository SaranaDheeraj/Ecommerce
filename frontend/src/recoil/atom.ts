import axios from "axios";
import { atom, selector } from "recoil";

export const signedInState = atom({
  key: "signedInState",
  default: localStorage.getItem("token") !== null,
});

export const cartItem = atom({
  key: "cartItem",
  default: selector({
    key: "initialItems",
    get: async () => {
      const token = localStorage.getItem("token");
      const items = await axios.get("http://localhost:3000/cart", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return items.data;
    },
  }),
});
