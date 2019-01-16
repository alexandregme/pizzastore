const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
          ...state,
          {
            pizzaSize: action.pizzaSize
          }
        ];
    default:
      return state;
  }
};

export default cart;
