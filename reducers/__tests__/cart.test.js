import cart from '../../reducers/cart';
import deepFreeze from 'deep-freeze';

describe('cart reducer', () => {

  const actionSmallPizza = {
    type: 'ADD_TO_CART',
    pizzaSize: 'SMALL'
  };

  const actionLargePizza = {
    type: 'ADD_TO_CART',
    pizzaSize: 'LARGE'
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

    expect(cart(cartBefore, actionSmallPizza)).toEqual(cartAfter);

    cartBefore = [{"id": 0, "pizzaSize": "SMALL"}];
    cartAfter = [{"id": 0, "pizzaSize": "SMALL"}, {"id": 1, "pizzaSize": "LARGE"}];

    deepFreeze(cartBefore);
    expect(cart(cartBefore,actionLargePizza)).toEqual(cartAfter);
  });

  it('should handle REMOVE_FROM_CART with deepFreeze mutation', () => {

    cartBefore = [{id:1, pizzaSize: 'SMALL'}];
    cartAfter = [];

    deepFreeze(cartBefore);

    expect(cart(cartBefore, {type: 'REMOVE_FROM_CART', id: 1})).toEqual(cartAfter);
  });
});
