let nextid = 0;
const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
          ...state,
          {
            id: nextid++,
            ...action.pizza
          }
        ];
    case 'REMOVE_FROM_CART':
      return state.filter((item)=> item.id !== action.id);

    default:
      return state;
  }
};

export default cart;
