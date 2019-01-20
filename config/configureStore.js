import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
import { PIZZAS } from "../__mocks__";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const store = createStore(reducers,{pizzas:PIZZAS},composeWithDevTools(applyMiddleware()));
  return store;
};

export default configureStore;
