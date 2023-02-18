import {
  GET_MY_NEWS_FAILURE,
  GET_MY_NEWS_REQUEST,
  GET_MY_NEWS_SUCCESS,
  GET_PRESENTLY_FAILURE,
  GET_PRESENTLY_REQUEST,
  GET_PRESENTLY_SUCCESS,
} from '../Constants/fileUploadConstants';

//GET my work news
export const myNewsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MY_NEWS_REQUEST:
      return { loading: true };
    case GET_MY_NEWS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case GET_MY_NEWS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
//GET my work PRESENTLY
export const presentlyReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRESENTLY_REQUEST:
      return { loading: true };
    case GET_PRESENTLY_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case GET_PRESENTLY_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
