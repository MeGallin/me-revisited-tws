import {
  ADMIN_GET_ALL_IP_ADDRESS_FAILURE,
  ADMIN_GET_ALL_IP_ADDRESS_REQUEST,
  ADMIN_GET_ALL_IP_ADDRESS_SUCCESS,
  ADMIN_GET_CONTACT_EMAIL_FAILURE,
  ADMIN_GET_CONTACT_EMAIL_REQUEST,
  ADMIN_GET_CONTACT_EMAIL_SUCCESS,
  ADMIN_UPLOAD_FILE_FAILURE,
  ADMIN_UPLOAD_FILE_REQUEST,
  ADMIN_UPLOAD_FILE_SUCCESS,
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
//GET: ADMIN GET all emails sent from contact form
export const adminGetContactEmailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_GET_CONTACT_EMAIL_REQUEST:
      return { loading: true };
    case ADMIN_GET_CONTACT_EMAIL_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_GET_CONTACT_EMAIL_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
//GET: ADMIN GET all emails sent from contact form
export const adminGetIpAddressesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_GET_ALL_IP_ADDRESS_REQUEST:
      return { loading: true };
    case ADMIN_GET_ALL_IP_ADDRESS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_GET_ALL_IP_ADDRESS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
//POST: ADMIN Upload a file
export const adminFileUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_UPLOAD_FILE_REQUEST:
      return { loading: true };
    case ADMIN_UPLOAD_FILE_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_UPLOAD_FILE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
