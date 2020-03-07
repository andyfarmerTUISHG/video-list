import {
  GET_VIDEOS,
  ADD_VIDEO,
  DELETE_VIDEO,
  GET_VIDEO,
  EDIT_VIDEO
} from "../actions/types";

const initialState = {
  videos: [],
  video: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload
      };
    case GET_VIDEO:
      return {
        ...state,
        video: action.payload
      };
    case EDIT_VIDEO:
      return {
        ...state,
        videos: state.videos.map(video =>
          video.id === action.payload.id ? (video = action.payload) : video
        )
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
