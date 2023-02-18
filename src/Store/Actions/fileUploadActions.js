import axios from 'axios';
import {
  GET_MY_NEWS_FAILURE,
  GET_MY_NEWS_REQUEST,
  GET_MY_NEWS_SUCCESS,
  GET_PRESENTLY_FAILURE,
  GET_PRESENTLY_REQUEST,
  GET_PRESENTLY_SUCCESS,
} from '../Constants/fileUploadConstants';

//GET: MY NEWS after uploads
export const myNewsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_MY_NEWS_REQUEST,
    });

    const { data } = await axios.get(
      `${process.env.REACT_APP_END_POINT}api/my-news`,
    );
    dispatch({ type: GET_MY_NEWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MY_NEWS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GET: MY NEWS after uploads
export const presentlyAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRESENTLY_REQUEST,
    });

    const { data } = await axios.get(
      `${process.env.REACT_APP_END_POINT}api/presently`,
    );
    dispatch({ type: GET_PRESENTLY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRESENTLY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
