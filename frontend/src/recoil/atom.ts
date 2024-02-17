import { atom, selector } from "recoil";

export const signedInState = atom({
  key: "signedInState",
  default: localStorage.getItem("token") !== null,
});

export const userCartItems = atom({
  key: "userCartItems",
  default: selector({
    key: "userCartItemsDefault",
    get: async ({ get }) => {
      const token = localStorage.getItem("token");

      if (!token) {
        return []; // Return an empty array if user is not logged in or userId is not available
      }

      try {
        const response = await fetch(`http://localhost:3000/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching cart items:", error);
        return [];
      }
    },
  }),
});
