// This functions is to add / remove books from the cart

// addCart will create an array with content of the current cart
// After that it will push the new item into it
export const addToCart = (cart, item) => {
  let currentCart = [...cart];

  currentCart.push(item);

  return currentCart;
};

// The removeCart function will look in the cart array for an object with the same id and then it will delete that element with splice
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
