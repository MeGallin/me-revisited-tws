import axios from 'axios';
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

//GET: ADMIN get USER Details
export const adminUserDetailsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_USER_DETAILS_REQUEST,
    });

    if (getState().userLogin.userInfo) {
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        `${process.env.REACT_APP_END_POINT}api/admin/user-details`,
        config,
      );
      dispatch({ type: ADMIN_USER_DETAILS_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_USER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//DELETE: ADMIN delete all USER's data
export const adminDeleteAllUserDataAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_USER_DELETE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.delete(
        `${process.env.REACT_APP_END_POINT}api/admin/user-delete/${id}`,
        config,
      );
      dispatch({ type: ADMIN_USER_DELETE_SUCCESS, payload: data });
      dispatch(adminUserDetailsAction());
    } catch (error) {
      dispatch({
        type: ADMIN_USER_DELETE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
//GET: ADMIN contact form emails
export const adminGetContactEmailsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_GET_CONTACT_EMAIL_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_END_POINT}api/admin/received-emails`,
      config,
    );
    dispatch({ type: ADMIN_GET_CONTACT_EMAIL_SUCCESS, payload: data });
    dispatch(adminUserDetailsAction());
  } catch (error) {
    dispatch({
      type: ADMIN_GET_CONTACT_EMAIL_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//GET: ADMIN All saved IP address
export const adminGetIpAddressesAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_GET_ALL_IP_ADDRESS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_END_POINT}api/admin/ip-address`,
      config,
    );
    dispatch({ type: ADMIN_GET_ALL_IP_ADDRESS_SUCCESS, payload: data });
    dispatch(adminUserDetailsAction());
  } catch (error) {
    dispatch({
      type: ADMIN_GET_ALL_IP_ADDRESS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//POST: ADMIN Upload a file
export const adminFileUploadAction =
  (formData) => async (dispatch, getState) => {
    console.log(formData);
    try {
      dispatch({
        type: ADMIN_UPLOAD_FILE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      //Check the file type

      const { data } = await axios.post(
        `${process.env.REACT_APP_END_POINT}api/admin/file-upload`,
        formData,
        config,
      );

      dispatch({ type: ADMIN_UPLOAD_FILE_SUCCESS, payload: data });
      dispatch(adminUserDetailsAction());
    } catch (error) {
      dispatch({
        type: ADMIN_UPLOAD_FILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
