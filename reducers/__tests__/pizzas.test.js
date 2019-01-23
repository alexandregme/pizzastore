import pizzas, { updateToppings, disabledToppings, updateTotalPrice, updatePizza} from '../../reducers/pizzas';
import deepFreeze from 'deep-freeze';
import { PIZZAS, CUSTOM_PIZZA, CUSTOM_TOPPING } from '../../__mocks__';

describe('pizzas reducer', () => {

  const actionFetchPizzas = {
    type: 'FETCH_PIZZAS',
    pizzas: PIZZAS
  };

  const actionToggleTopping = {
    type: 'TOGGLE_TOPPING_FROM_PIZZA',
    topping: CUSTOM_TOPPING
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
      name: "custom pizza",
      maxToppings: 1,
      basePrice: 1,
      totalPrice: 2.29,
      disabledToppings: true,
      toppings:[{
        pizzaSize: {
          name: "custom pizza"
        },
        topping: {
          name: "sausage",
          price: 1.29
        },
        defaultSelected: true
      },
        {
          pizzaSize: {
            name: "custom pizza"
          },
          topping: {
            name: "onion",
            price: 0.29
          },
          defaultSelected: false
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
    let totalPrice = 2.58;

    deepFreeze(customPizza);

    expect(updateTotalPrice(customPizza)).toEqual(totalPrice);
  });
});

describe('pizzas function updatePizza', () => {
  it('should return the initial state', () => {
    expect(updatePizza(undefined, {})).toEqual([]);
  });
});
