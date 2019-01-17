import pizzas from '../../reducers/pizzas';
import deepFreeze from 'deep-freeze';
import { PIZZAS } from '../../__mocks__';

describe('pizzas reducer', () => {

  const actionFetchPizzas = {
    type: 'FETCH_PIZZAS',
    pizzas: PIZZAS
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
});
