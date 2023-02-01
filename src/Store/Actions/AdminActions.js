import axios from 'axios';
import {
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
