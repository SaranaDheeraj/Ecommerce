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
    get: async ({ get }) => {
      const token = localStorage.getItem("token");
      const signedIn = get(signedInState);
      if (token) {
        const items = await axios.get("http://localhost:3000/cart", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        return items.data;
      }
      return [];
    },
  }),
});

export const total = selector({
  key: "totalprice",
  get: ({ get }) => {
    const items = get(cartItem);
    return items.reduce(
      (acc: number, { price, quantity }) =>
        acc + parseInt(price) * parseInt(quantity),
      0
    );
  },
});
