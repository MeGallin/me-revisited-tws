import axios from 'axios';
import {
  ANALYTICS_POST_FAILURE,
  ANALYTICS_POST_REQUEST,
  ANALYTICS_POST_SUCCESS,
} from '../Constants/analyticsConstants';

import { adminUserDetailsAction } from './AdminActions';

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
    dispatch(adminUserDetailsAction());
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
