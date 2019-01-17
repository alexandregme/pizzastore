export const addToCart = pizza => ({
  type: 'ADD_TO_CART',
  pizza
});


export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  id
});
