import React, { useReducer, useContext } from 'react';
import { ACTIONS, AppReducer } from './AppReducer';
import initialState from '../initialState';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: { item } });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: { id } });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: ACTIONS.TOGGLE_AMOUNT, payload: { id, type } });
  };

  const setBuyer = (buyer) => {
    dispatch({ type: ACTIONS.SET_BUYER, payload: { buyer } });
  };

  const addNewOrder = (order) => {
    dispatch({ type: ACTIONS.ADD_NEW_ORDER, payload: { order } });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addItemToCart,
        removeItemFromCart,
        toggleAmount,
        setBuyer,
        addNewOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
