export const addToCart = pizzaSize => ({
  type: 'ADD_TO_CART',
  pizzaSize
});


export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  id
});
