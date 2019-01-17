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
    cartAfter = [{"id": 0, ...CUSTOM_PIZZA}];

    deepFreeze(cartBefore);
    deepFreeze(actionAddSmallPizza);

    expect(cart(cartBefore, actionAddSmallPizza)).toEqual(cartAfter);

    cartBefore = [{"id": 0, ...CUSTOM_PIZZA}];
    cartAfter = [{"id": 0, ...CUSTOM_PIZZA}, {"id": 1, ...CUSTOM_PIZZA}];

    deepFreeze(cartBefore);
    deepFreeze(actionAddLargePizza);
    expect(cart(cartBefore,actionAddLargePizza)).toEqual(cartAfter);
  });

  it('should handle REMOVE_FROM_CART with deepFreeze mutation', () => {

    cartBefore = [{id:1, pizzaSize: 'SMALL'}];
    cartAfter = [];

    deepFreeze(cartBefore);
    deepFreeze(actionRemoveById);

    expect(cart(cartBefore, actionRemoveById)).toEqual(cartAfter);
  });
});
