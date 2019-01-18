let nextid = 0;


const addItemToCart = (state = [], action) => {
  return [
    ...state,
    {
      id: nextid++,
      ...action.pizza
    }
  ];
};

const removeItemFromCart = (state = [], action) => {
  return state.filter((item)=> item.id !== action.id);
};

const totalCostCart = (state = []) => {
  return  state.reduce((sum, item) => sum + item.totalPrice, 0);
};

const cart = (state = [], action) => {
  let modifiedCart = {};

  switch (action.type) {
    case 'ADD_TO_CART':
      modifiedCart.items = addItemToCart(state.items, action);
      modifiedCart.totalCost = totalCostCart(modifiedCart.items);
      modifiedCart.totalItems = modifiedCart.items.length;
      return modifiedCart;

    case 'REMOVE_FROM_CART':
      modifiedCart.items = removeItemFromCart(state.items, action);
      modifiedCart.totalCost = totalCostCart(modifiedCart.items);
      modifiedCart.totalItems = modifiedCart.items.length;
      return modifiedCart;

    default:
      return state;
  }
};

export default cart;
