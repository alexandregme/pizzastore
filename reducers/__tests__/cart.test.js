import cart from '../../reducers/cart';
import deepFreeze from 'deep-freeze';

describe('cart reducer', () => {

  const actionAddSmallPizza = {
    type: 'ADD_TO_CART',
    pizzaSize: 'SMALL'
  };

  const actionAddLargePizza = {
    type: 'ADD_TO_CART',
    pizzaSize: 'LARGE'
  };

  const actionRemoveByid = {
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
    cartAfter = [{"id": 0, "pizzaSize": "SMALL"}];

    deepFreeze(cartBefore);
    deepFreeze(actionAddSmallPizza);

    expect(cart(cartBefore, actionAddSmallPizza)).toEqual(cartAfter);

    cartBefore = [{"id": 0, "pizzaSize": "SMALL"}];
    cartAfter = [{"id": 0, "pizzaSize": "SMALL"}, {"id": 1, "pizzaSize": "LARGE"}];

    deepFreeze(cartBefore);
    deepFreeze(actionAddLargePizza);
    expect(cart(cartBefore,actionAddLargePizza)).toEqual(cartAfter);
  });

  it('should handle REMOVE_FROM_CART with deepFreeze mutation', () => {

    cartBefore = [{id:1, pizzaSize: 'SMALL'}];
    cartAfter = [];

    deepFreeze(cartBefore);
    deepFreeze(actionRemoveByid);

    expect(cart(cartBefore, actionRemoveByid)).toEqual(cartAfter);
  });
});
