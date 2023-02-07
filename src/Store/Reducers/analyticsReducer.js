import {
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
