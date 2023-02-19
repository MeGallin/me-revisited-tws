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
  userDownloadCounterReducer,
} from './Reducers/userReducers';

import {
  adminUserDetailsReducer,
  adminDeleteUserReducer,
  adminGetContactEmailsReducer,
  adminGetIpAddressesReducer,
  adminFileUploadReducer,
} from './Reducers/AdminReducer';

import {
  saveAnalyticsReducer,
  getAnalyticsReducer,
} from './Reducers/analyticsReducer';

import {
  presentlyReducer,
  myNewsReducer,
  recentPastReducer,
} from './Reducers/fileUploadReducers';

//Initialise state to hold user info if logged in.
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const reducer = combineReducers({
  adminUserDetails: adminUserDetailsReducer,
  adminDeleteUser: adminDeleteUserReducer,
  adminGetContactEmails: adminGetContactEmailsReducer,
  adminGetIpAddresses: adminGetIpAddressesReducer,
  adminFileUpload: adminFileUploadReducer,
  pageHits: pageHitsReducer,
  contactForm: contactFormReducer,
  userRegistration: userRegistrationReducer,
  userLogin: userLoginReducer,
  googleUserLogin: googleUserLoginReducer,
  userInfoDetails: userInfoDetailsReducer,
  userEditDetails: userEditDetailsReducer,
  userForgotPassword: userForgotPasswordReducer,
  userResetPassword: userResetPasswordReducer,
  userDownloadCounter: userDownloadCounterReducer,
  saveAnalytics: saveAnalyticsReducer,
  getAnalytics: getAnalyticsReducer,
  myNews: myNewsReducer,
  presently: presentlyReducer,
  recentPast: recentPastReducer,
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
