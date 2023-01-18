import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { pageHitsReducer } from './Reducers/pageHitsReducers';

const reducer = combineReducers({
  pageHits: pageHitsReducer,
});

const initialState = {};
const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
