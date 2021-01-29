/* eslint-disable import/prefer-default-export */
const getTotalPrice = (cart) => {
  return cart.reduce((acc, curr) => {
    return acc + curr.price * curr.amount;
  }, 0);
};

export { getTotalPrice };
