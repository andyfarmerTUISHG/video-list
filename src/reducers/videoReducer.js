import { GET_VIDEOS, ADD_VIDEO, DELETE_VIDEO } from "../actions/types";

const initialState = {
  videos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload
      };
    case ADD_VIDEO:
      return {
        ...state,
        videos: [action.payload, ...state.videos]
      };
    case DELETE_VIDEO:
      return {
        ...state,
        videos: state.videos.filter(video => video.id !== action.payload)
      };
    default:
      return state;
  }
}
