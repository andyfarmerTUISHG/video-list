import { GET_VIDEOS, ADD_VIDEO, DELETE_VIDEO } from "../actions/types";

const initialState = {
  videos: [
    {
      id: 1,
      name: "Aliens",
      genre: "SCI-FI",
      mediaType: "DVD"
    },
    {
      id: 2,
      name: "Alien",
      genre: "SCI-FI",
      mediaType: "DVD"
    },
    {
      id: 3,
      name: "Deadpool",
      genre: "ACTION",
      mediaType: "Blu-Ray"
    },
    {
      id: 4,
      name: "Deadpool 2",
      genre: "ACTION",
      mediaType: "Blu-Ray"
    },
    {
      id: 5,
      name: "Get Out",
      genre: "Horror",
      mediaType: "Blu-Ray"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state
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
