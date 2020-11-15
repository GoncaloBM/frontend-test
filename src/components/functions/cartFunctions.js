export const addToCart = (cart, item) => {
  let currentCart = [...cart];

  currentCart.push(item);

  return currentCart;
};

export const removeFromCart = (cart, item) => {
  let currentCart = [...cart];
  const itemToRemove = { ...item };

  for (let i = 0; i < currentCart.length; i++) {
    if (currentCart[i].id === itemToRemove.id) {
      currentCart.splice(i, 1);
    }
  }
  return currentCart;
};
