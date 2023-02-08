import {
  ANALYTICS_GET_DATA_FAILURE,
  ANALYTICS_GET_DATA_REQUEST,
  ANALYTICS_GET_DATA_SUCCESS,
  ANALYTICS_POST_FAILURE,
  ANALYTICS_POST_REQUEST,
  ANALYTICS_POST_SUCCESS,
} from '../Constants/analyticsConstants';

//POST: Save Analytics client data to DB
export const saveAnalyticsReducer = (state = {}, action) => {
  switch (action.type) {
    case ANALYTICS_POST_REQUEST:
      return { loading: true };
    case ANALYTICS_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ANALYTICS_POST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

//GET: ADMIN get all analytics data
export const getAnalyticsReducer = (state = {}, action) => {
  switch (action.type) {
    case ANALYTICS_GET_DATA_REQUEST:
      return { loading: true };
    case ANALYTICS_GET_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ANALYTICS_GET_DATA_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
