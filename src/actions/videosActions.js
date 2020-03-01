import { GET_VIDEOS, ADD_VIDEO, DELETE_VIDEO } from "../actions/types";
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
export const addVideo = video => {
  return {
    type: ADD_VIDEO,
    payload: video
  };
};
export const deleteVideo = id => {
  return {
    type: DELETE_VIDEO,
    payload: id
  };
};
