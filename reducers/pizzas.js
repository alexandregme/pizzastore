export const updateToppings = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_TOPPING_FROM_PIZZA':
      return state.toppings.map(topping => {
        if (topping.topping.name != action.topping.topping.name) {
          return topping
        }
        let updateTopping = {...topping};
        updateTopping.defaultSelected = !topping.defaultSelected;
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

  let totalToggled = state.toppings.filter(topping => topping.defaultSelected);
  return state.maxToppings <= totalToggled.length;
};

export const updateTotalPrice = (state = {toppings:[]}) =>{
  return  state.toppings
    .filter((topping)=>(topping.defaultSelected))
    .reduce(
      (sum, topping) => sum + parseFloat(topping.topping.price),
      state.basePrice? parseFloat(state.basePrice) : 0
    );
};

export const updatePizza = (state = [], action) =>{
  switch (action.type) {
    case 'TOGGLE_TOPPING_FROM_PIZZA':
      return state.map(pizza =>{
        if (pizza.name !== action.topping.pizzaSize.name) {
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

export const addPizzas = (state = []) => {
  let updatePizza = {...state};
  updatePizza.totalPrice = updateTotalPrice(updatePizza);
  updatePizza.disabledToppings = disabledToppings(updatePizza);
  return updatePizza;
};

const pizzas = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PIZZAS':
      return action.pizzas.map(pizza=> addPizzas(pizza));
    case 'TOGGLE_TOPPING_FROM_PIZZA':
      return updatePizza(state, action);
    default:
      return state;
  }
};

export default pizzas;
