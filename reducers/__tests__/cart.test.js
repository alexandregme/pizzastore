import cart from '../../reducers/cart';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(cart(undefined, {})).toEqual([])
  });

  it('should handle ADD_TO_CART', () => {
    expect(
      cart([], {
        type: 'ADD_TO_CART',
        pizzaSize: 'SMALL'
      })
    ).toEqual([
      {
        pizzaSize: 'SMALL'
      }
    ]);

    expect(
      cart(
        [
          {
            pizzaSize: 'SMALL'
          }
        ],
        {
          type: 'ADD_TO_CART',
          pizzaSize: 'LARGE'
        }
      )
    ).toEqual([
      {
        pizzaSize: 'SMALL'
      },
      {
        pizzaSize: 'LARGE'
      }
    ])
  })
});
