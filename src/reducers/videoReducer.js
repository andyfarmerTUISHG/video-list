import { GET_VIDEOS } from "../actions/types";

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
    default:
      return state;
  }
}
