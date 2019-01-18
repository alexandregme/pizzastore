export const updateToppings = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_TOPPING_FROM_PIZZA':
      return state.toppings.map(topping => {
        if (topping.name !== action.toppingName) {
          return topping
        }
        let updateTopping = {...topping};
        updateTopping.isChecked = !topping.isChecked;
        return updateTopping
      });
    default:
      return state;
  }
};

export const disabledToppings = (state = {}) => {
  if (!state.maxToppings){
    return false;
  }

  let totalToggled = state.toppings.filter(topping => topping.isChecked);
  return state.maxToppings <= totalToggled.length;
};

export const updateTotalPrice = (state = {toppings:[]}) =>{
  return  state.toppings
    .filter((topping)=>(topping.isChecked))
    .reduce(
      (sum, topping) => sum + topping.price,
      state.basePrice? state.basePrice : 0
    );
};

export const updatePizza = (state = [], action) =>{
  switch (action.type) {
    case 'TOGGLE_TOPPING_FROM_PIZZA':
      return state.map(pizza =>{
        if (pizza.name !== action.pizzaName) {
          return pizza;
        }else {
          let updatePizza = {...pizza};
          updatePizza.toppings = updateToppings(updatePizza, action);
          updatePizza.totalPrice = updateTotalPrice(updatePizza);
          updatePizza.disabledToppings = disabledToppings(updatePizza);
          return updatePizza;
        }
      });
    default:
      return state;
  }
};

const pizzas = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PIZZAS':
      return action.pizzas;
    case 'TOGGLE_TOPPING_FROM_PIZZA':
      return updatePizza(state, action);
    default:
      return state;
  }
};

export default pizzas;
