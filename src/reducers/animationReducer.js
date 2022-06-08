const initialState = {
  state: {},
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        state: action.payload.state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default statsReducer;
