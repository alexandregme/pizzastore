export const fetchPizzas = pizzas => ({
  type: 'FETCH_PIZZAS',
  pizzas
});

export const addToCart = pizza => ({
  type: 'ADD_TO_CART',
  pizza
});


export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  id
});

export const toggleTopping = (pizzaName, toppingName) => ({
  type: 'TOGGLE_TOPPING_FROM_PIZZA',
  pizzaName,
  toppingName
});
