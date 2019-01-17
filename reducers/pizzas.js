const pizzas = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PIZZAS':
      return action.pizzas;
    case 'TOGGLE_TOPPING_FROM_PIZZA':
      return state.map(pizza =>{
        if (pizza.name !== action.pizzaName) {
          return pizza;
        }else {
          return {
            ...pizza,
            toppings: pizza.toppings.map(topping => {
              if (topping.name !== action.toppingName) {
                return topping
              }
              return {
                ...topping,
                isChecked: !topping.isChecked
              }
            })
          }
        }
      });
    default:
      return state;
  }
};

export default pizzas;
