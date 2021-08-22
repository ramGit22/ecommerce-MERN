import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productListReducers from "./reducers/productReducers";

const reducer = combineReducers({ productList: productListReducers });

const initialState = {};

const middleware = [ReduxThunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
