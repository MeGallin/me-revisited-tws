import {
  GOOGLE_USER_LOGIN_FAILURE,
  GOOGLE_USER_LOGIN_REQUEST,
  GOOGLE_USER_LOGIN_SUCCESS,
  GOOGLE_USER_LOGOUT,
  USER_DOWNLOAD_COUNTER_FAILURE,
  USER_DOWNLOAD_COUNTER_REQUEST,
  USER_DOWNLOAD_COUNTER_SUCCESS,
  USER_EDIT_DETAILS_FAILURE,
  USER_EDIT_DETAILS_REQUEST,
  USER_EDIT_DETAILS_SUCCESS,
  USER_FORGOT_PW_FAILURE,
  USER_FORGOT_PW_REQUEST,
  USER_FORGOT_PW_SUCCESS,
  USER_INFO_DETAILS_FAILURE,
  USER_INFO_DETAILS_REQUEST,
  USER_INFO_DETAILS_RESET,
  USER_INFO_DETAILS_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_RESET_PASSWORD_FAILURE,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
} from '../Constants/userConstants';
import axios from 'axios';

//GET: USER INFO DETAILS
export const userInfoDetailsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_INFO_DETAILS_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/user-details`,
        config,
      );
      dispatch({ type: USER_INFO_DETAILS_SUCCESS, payload: data });
    }

    if (getState().googleUserLogin.userInfo) {
      const {
        googleUserLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        `${process.env.REACT_APP_END_POINT}api/user-details`,
        config,
      );
      dispatch({ type: USER_INFO_DETAILS_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: USER_INFO_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// User Registration
export const registerAction = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/register`,
      formData,
      config,
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//User Login
export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/login`,
      formData,
      config,
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch(userInfoDetailsAction());
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GOOGLE User Login
export const googleUserLoginAction = (googleRes) => async (dispatch) => {
  try {
    dispatch({
      type: GOOGLE_USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${googleRes.credential}`,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/google-login`,
      config,
    );

    dispatch({ type: GOOGLE_USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch(userInfoDetailsAction());
  } catch (error) {
    dispatch({
      type: GOOGLE_USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//User logout
export const logoutAction = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: GOOGLE_USER_LOGOUT });
  dispatch({ type: USER_INFO_DETAILS_RESET });
};

//PUT: User EDIT Password
export const userEditDetailAction =
  (id, formaData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_EDIT_DETAILS_REQUEST,
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

      const { data } = await axios.put(
        `${process.env.REACT_APP_END_POINT}api/user/${id.id}`,
        formaData,
        config,
      );
      dispatch({ type: USER_EDIT_DETAILS_SUCCESS, payload: data });
      dispatch(userInfoDetailsAction());
    } catch (error) {
      dispatch({
        type: USER_EDIT_DETAILS_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//User Forgot password Send email
export const userForgotPasswordAction = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_PW_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/forgot-password`,
      { email: email },
      config,
    );
    dispatch({ type: USER_FORGOT_PW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PW_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//User Reset Password
export const userResetPasswordAction = (updatedInfo) => async (dispatch) => {
  try {
    dispatch({
      type: USER_RESET_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_END_POINT}api/reset-password/${updatedInfo.resetPasswordToken}`,
      updatedInfo,
      config,
    );
    dispatch({ type: USER_RESET_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_RESET_PASSWORD_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//User download counter
export const userDownloadCounterAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DOWNLOAD_COUNTER_REQUEST,
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

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/user-download-cv/${id}`,
      { downloadCounter: 1 },
      config,
    );
    dispatch({ type: USER_DOWNLOAD_COUNTER_SUCCESS, payload: data });
    dispatch(userInfoDetailsAction());
  } catch (error) {
    dispatch({
      type: USER_DOWNLOAD_COUNTER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
