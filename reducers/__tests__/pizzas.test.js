import pizzas from '../../reducers/pizzas';
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
    expect(pizzas(undefined, {})).toEqual([])
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
      toppings:[{
        name:"topping 1",
        price:1,
        isChecked:true
      }]
    }];

    deepFreeze(pizzasBefore);
    deepFreeze(actionToggleTopping);

    expect(pizzas(pizzasBefore, actionToggleTopping)).toEqual(pizzasAfter);
  });
});
