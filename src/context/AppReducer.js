const ACTIONS = {
  ADD_TO_CART: 'add-to-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
  TOGGLE_AMOUNT: 'toggle-amount',
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      return { ...state, cart: [...state.cart, action.payload.item] };
    }
    case ACTIONS.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    case ACTIONS.TOGGLE_AMOUNT: {
      const { cart } = state;
      const updatedCart = cart
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === 'increase') {
              return { ...item, amount: item.amount + 1 };
            }
            if (action.payload.type === 'decrease') {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount > 0);
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};

export { ACTIONS, AppReducer };
