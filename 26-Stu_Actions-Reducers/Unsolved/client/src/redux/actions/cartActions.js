export const TOGGLE_CART = "TOGGLE_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const addMultipleToCart = (products) => ({
  type: ADD_MULTIPLE_TO_CART,
  payload: products
});
