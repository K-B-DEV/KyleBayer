//action creator
export const changeAnimationState = (mode) => async (dispatch) => {
  //Fetch Axios
  dispatch({
    type: "CHANGE_STATE",
    payload: {
      state: mode,
    },
  });
};
