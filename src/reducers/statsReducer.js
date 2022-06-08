const initialState = {
  stats: {},
  isLoading: true,
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STATS":
      return {
        ...state,
        stats: action.payload.stats,
        isLoading: false,
      };
    case "LOADING_MOVIE":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default statsReducer;
