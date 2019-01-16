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
    cartAfter = [{pizzaSize: 'SMALL'}];

    deepFreeze(cartBefore);

    expect(cart(cartBefore, actionSmallPizza)).toEqual(cartAfter);

    cartBefore = [{pizzaSize: 'SMALL'}];
    cartAfter = [{pizzaSize: 'SMALL'}, {pizzaSize: 'LARGE'}];

    deepFreeze(cartBefore);
    expect(cart(cartBefore,actionLargePizza)).toEqual(cartAfter);
  });
});
