import axios from 'axios';
import {
  ANALYTICS_GET_DATA_FAILURE,
  ANALYTICS_GET_DATA_REQUEST,
  ANALYTICS_GET_DATA_SUCCESS,
  ANALYTICS_POST_FAILURE,
  ANALYTICS_POST_REQUEST,
  ANALYTICS_POST_SUCCESS,
} from '../Constants/analyticsConstants';

//POST: Save analytics data to DB
export const saveAnalyticsAction = (analyticsData) => async (dispatch) => {
  try {
    dispatch({
      type: ANALYTICS_POST_REQUEST,
    });

    const config = {};

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/analytics`,
      analyticsData,
      config,
    );

    dispatch({ type: ANALYTICS_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ANALYTICS_POST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GET: ADMIN get analytics Data
export const getAnalyticsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ANALYTICS_GET_DATA_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/admin/analytics-data`,
        config,
      );
      dispatch({ type: ANALYTICS_GET_DATA_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: ANALYTICS_GET_DATA_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
