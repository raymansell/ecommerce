const ACTIONS = {
  ADD_TO_CART: 'add-to-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
  CLEAR_CART: 'clear-cart',
  TOGGLE_AMOUNT: 'toggle-amount',
  SET_BUYER: 'set-buyer',
  ADD_NEW_ORDER: 'add-new-order',
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
    case ACTIONS.CLEAR_CART: {
      return {
        ...state,
        cart: [],
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
    case ACTIONS.SET_BUYER: {
      return {
        ...state,
        buyer: [...state.buyer, action.payload.buyer],
      };
    }
    case ACTIONS.ADD_NEW_ORDER: {
      return {
        ...state,
        orders: [...state.orders, action.payload.order],
      };
    }
    default:
      return state;
  }
};

export { ACTIONS, AppReducer };
