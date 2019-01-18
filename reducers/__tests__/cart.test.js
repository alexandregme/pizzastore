import cart from '../../reducers/cart';
import deepFreeze from 'deep-freeze';
import { CUSTOM_PIZZA } from '../../__mocks__';

describe('cart reducer', () => {

  const actionAddSmallPizza = {
    type: 'ADD_TO_CART',
    pizza: CUSTOM_PIZZA
  };

  const actionAddLargePizza = {
    type: 'ADD_TO_CART',
    pizza: CUSTOM_PIZZA
  };

  const actionRemoveById = {
    type: 'REMOVE_FROM_CART',
    id: 1
  };

  let cartBefore;
  let cartAfter;

  it('should return the initial state', () => {
    expect(cart(undefined, {})).toEqual([])
  });

  it('should handle ADD_TO_CART with deepFreeze mutation', () => {

    cartBefore = [];
    cartAfter = {
      items:[{"id": 0, ...CUSTOM_PIZZA}],
      totalCost:1,
      totalItems:1
    };

    deepFreeze(cartBefore);
    deepFreeze(actionAddSmallPizza);

    expect(cart(cartBefore, actionAddSmallPizza)).toEqual(cartAfter);

    cartBefore = {
      items: [{"id": 0, ...CUSTOM_PIZZA}]
    };
    cartAfter = {
      items: [{"id": 0, ...CUSTOM_PIZZA}, {"id": 1, ...CUSTOM_PIZZA}],
      totalCost:2,
      totalItems:2
    };

    deepFreeze(cartBefore);
    deepFreeze(actionAddLargePizza);
    expect(cart(cartBefore,actionAddLargePizza)).toEqual(cartAfter);
  });

  it('should handle REMOVE_FROM_CART with deepFreeze mutation', () => {

    cartBefore = [{id:1, pizzaSize: 'SMALL'}];
    cartAfter = {items: [], totalCost: 0, totalItems: 0};

    deepFreeze(cartBefore);
    deepFreeze(actionRemoveById);

    expect(cart(cartBefore, actionRemoveById)).toEqual(cartAfter);
  });
});
