import {
  GET_VIDEOS,
  ADD_VIDEO,
  DELETE_VIDEO,
  GET_VIDEO,
  EDIT_VIDEO
} from "../actions/types";
import Axios from "axios";

export const getVideos = () => async dispatch => {
  const res = await Axios.get(
    "https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos/"
  );
  dispatch({
    type: GET_VIDEOS,
    payload: res.data
  });
};
export const addVideo = video => async dispatch => {
  const res = await Axios.post(
    `https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos/`,
    video
  );
  dispatch({
    type: ADD_VIDEO,
    payload: res.data
  });
};
export const getVideo = id => async dispatch => {
  const res = await Axios.get(
    `https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos/${id}`
  );
  dispatch({
    type: GET_VIDEO,
    payload: res.data
  });
};
export const deleteVideo = id => async dispatch => {
  try {
    const res = await Axios.delete(
      `https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos/${id}`
    );
    dispatch({
      type: DELETE_VIDEO,
      payload: id
    });
  } catch (error) {
    console.log(`Something went wrong  - ${error} \n Delete anyways`);
    dispatch({
      type: DELETE_VIDEO,
      payload: id
    });
  }
};

export const editVideo = video => async dispatch => {
  const res = await Axios.put(
    `https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos/${video.id}`,
    video
  );
  dispatch({
    type: EDIT_VIDEO,
    payload: res.data
  });
};
