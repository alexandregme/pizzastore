const pizzas = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PIZZAS':
      return action.pizzas;
    default:
      return state;
  }
};

export default pizzas;
