import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../actions/cartActions';

const initialState = {
  cart: [],
  cartOpen: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
