import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { pageHitsReducer } from './Reducers/pageHitsReducers';
import { contactFormReducer } from './Reducers/contactFormReducer';
import {
  userRegistrationReducer,
  userLoginReducer,
  googleUserLoginReducer,
  userInfoDetailsReducer,
  userEditDetailsReducer,
  userForgotPasswordReducer,
  userResetPasswordReducer,
} from './Reducers/userReducers';

import { adminUserDetailsReducer } from './Reducers/AdminReducer';

//Initialise state to hold user info if logged in.
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const reducer = combineReducers({
  adminUserDetails: adminUserDetailsReducer,
  pageHits: pageHitsReducer,
  contactForm: contactFormReducer,
  userRegistration: userRegistrationReducer,
  userLogin: userLoginReducer,
  googleUserLogin: googleUserLoginReducer,
  userInfoDetails: userInfoDetailsReducer,
  userEditDetails: userEditDetailsReducer,
  userForgotPassword: userForgotPasswordReducer,
  userResetPassword: userResetPasswordReducer,
});

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
