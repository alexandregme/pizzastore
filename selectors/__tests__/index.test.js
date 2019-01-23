import React from 'react';
import expect from 'expect';
import { getTotalItems, getTotalCost } from '../../selectors';
import { STORE } from '../../__mocks__';

describe('Selectors', () => {
  it('getTotalItems should get totalItems from the cart', () => {
    let totalItems = getTotalItems(STORE);
    expect(totalItems).toEqual(0);
  });

  it('getTotalCost should get totalCost from the cart', () => {
    let totalCost = getTotalCost(STORE);
    expect(totalCost).toEqual(0);
  });
});
