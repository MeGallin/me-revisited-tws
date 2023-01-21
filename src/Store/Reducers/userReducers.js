import {
  GOOGLE_USER_LOGIN_FAILURE,
  GOOGLE_USER_LOGIN_REQUEST,
  GOOGLE_USER_LOGIN_SUCCESS,
  GOOGLE_USER_LOGOUT,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_REGISTER_SUCCESS,
} from '../Constants/userConstants';

//Register a User
export const userRegistrationReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case USER_REGISTER_RESET:
      return {};
    case USER_REGISTER_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};

// Login a registered User
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return { ...state };
  }
};

// GOOGLE USER LOGIN REDUCER
export const googleUserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case GOOGLE_USER_LOGIN_REQUEST:
      return { loading: true };
    case GOOGLE_USER_LOGIN_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case GOOGLE_USER_LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    case GOOGLE_USER_LOGOUT:
      return {};
    default:
      return { ...state };
  }
};
