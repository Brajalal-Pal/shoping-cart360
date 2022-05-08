import axios from "axios";
import { Dispatch } from "redux";

import { movieConstants } from "../constants/movie-constant";

export const getMoviesActionV2 =
  (title: string) => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: movieConstants.MOVIE_REQUEST });

      const options = {
        method: "GET",
        url: process.env.REACT_APP_LOCAL_API_URL,
        params: { title: title },
      };
      console.log(options);
      const { data } = await axios.request(options as any);

      dispatch({ type: movieConstants.MOVIE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: movieConstants.MOVIE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getMoviesAction =
  (title: string) => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: movieConstants.MOVIE_REQUEST });

      const options = {
        method: "GET",
        url: process.env.REACT_APP_IMAGE_API_URL,
        params: { q: title },
        headers: {
          "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
          "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
        },
      };

      const { data } = await axios.request(options as any);

      dispatch({ type: movieConstants.MOVIE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: movieConstants.MOVIE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch: Dispatch) => {
  dispatch({ type: movieConstants.CLEAR_ERRORS });
};
