import pizzas, { updateToppings, disabledToppings, updateTotalPrice, updatePizza} from '../../reducers/pizzas';
import deepFreeze from 'deep-freeze';
import { PIZZAS, CUSTOM_PIZZA } from '../../__mocks__';

describe('pizzas reducer', () => {

  const actionFetchPizzas = {
    type: 'FETCH_PIZZAS',
    pizzas: PIZZAS
  };

  const actionToggleTopping = {
    type: 'TOGGLE_TOPPING_FROM_PIZZA',
    pizzaName: 'small',
    toppingName: 'topping 1'

  };

  let pizzasBefore;
  let pizzasAfter;

  it('should return the initial state', () => {
    expect(pizzas(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_PIZZAS with deepFreeze mutation', () => {

    pizzasBefore = [];
    pizzasAfter = PIZZAS;

    deepFreeze(pizzasBefore);
    deepFreeze(actionFetchPizzas);

    expect(pizzas(pizzasBefore, actionFetchPizzas)).toEqual(pizzasAfter);
  });

  it('should handle TOGGLE_TOPPING_FROM_PIZZA with deepFreeze mutation', () => {
    pizzasBefore = [CUSTOM_PIZZA];
    pizzasAfter = [{
      "name": "custom pizza",
      "maxToppings": 1,
      "basePrice": 1,
      "totalPrice": 1,
      toppings:[{
        name:"topping 1",
        price:4,
        isChecked:true
      },{
        name:"topping 2",
        price:1,
        isChecked:false
      }]
    }];

    deepFreeze(pizzasBefore);
    deepFreeze(actionToggleTopping);

    expect(pizzas(pizzasBefore, actionToggleTopping)).toEqual(pizzasAfter);
  });
});

describe('pizzas function updateToppings', () => {
  it('should return the initial state', () => {
    expect(updateToppings(undefined, {})).toEqual([]);
  });
});

describe('pizzas function disabledToppings', () => {
  it('should return the initial state', () => {
    expect(disabledToppings(undefined, {})).toEqual(false);
  });
});

describe('pizzas function updateTotalPrice', () => {
  it('should return the initial state', () => {
    expect(updateTotalPrice(undefined, {})).toEqual(0);
  });

  it('should return the right value for sum with deepFreeze mutation', () => {
    let customPizza = CUSTOM_PIZZA;
    let totalPrice = 5;

    deepFreeze(customPizza);

    expect(updateTotalPrice(customPizza)).toEqual(totalPrice);
  });
});

describe('pizzas function updatePizza', () => {
  it('should return the initial state', () => {
    expect(updatePizza(undefined, {})).toEqual([]);
  });
});
