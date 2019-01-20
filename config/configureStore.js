import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchPizzas } from '../actions';

const FETCH_PIZZAS_QUERY = `{
  pizzaSizes{
    name
    maxToppings
    basePrice
    toppings{	
      pizzaSize{
        name
      }
      topping{
        name
        price
      }
      defaultSelected
    }
  }
}`;

const configureStore = () => {
  const store = createStore(reducers,{} ,composeWithDevTools(applyMiddleware()));

  const url ='http://core-graphql.dev.waldo.photos';

  axios.post({
    url: `${url}/pizza`,
    headers: {
      'Access-Control-Allow-Origin': url,
      'Content-Type': 'application/json; charset=utf-8'
    },
    data: {
      query: FETCH_PIZZAS_QUERY
    }
  }).then(({data})=>{
    store.dispatch(fetchPizzas(data.data.pizzaSizes));
  });

  return store;
};

export default configureStore;
