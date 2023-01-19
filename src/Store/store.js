import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { pageHitsReducer } from './Reducers/pageHitsReducers';
import { contactFormReducer } from './Reducers/contactFormReducer';

const reducer = combineReducers({
  pageHits: pageHitsReducer,
  contactForm: contactFormReducer,
});

const initialState = {};
const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
