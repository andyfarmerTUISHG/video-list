import { GET_VIDEOS, ADD_VIDEO, DELETE_VIDEO } from "../actions/types";

export const getVideos = () => {
  return {
    type: GET_VIDEOS
  };
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
