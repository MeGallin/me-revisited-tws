import {
  ADMIN_USER_DELETE_FAILURE,
  ADMIN_USER_DELETE_REQUEST,
  ADMIN_USER_DELETE_SUCCESS,
  ADMIN_USER_DETAILS_FAILURE,
  ADMIN_USER_DETAILS_REQUEST,
  ADMIN_USER_DETAILS_SUCCESS,
} from '../Constants/AdminConstants';

//GET: ADMIN get USER details
export const adminUserDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_USER_DETAILS_REQUEST:
      return { loading: true };
    case ADMIN_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_USER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

//DELETE: ADMIN Delete user details
export const adminDeleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_USER_DELETE_REQUEST:
      return { loading: true };
    case ADMIN_USER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_USER_DELETE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
