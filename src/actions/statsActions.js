import axios from "axios";
import { helium_stats } from "../api";

//action creator
export const loadStats = () => async (dispatch) => {
  //Fetch Axios
  const statsData = await axios.get(helium_stats());
  dispatch({
    type: "GET_STATS",
    payload: {
      stats: statsData.data.data.counts,
    },
  });
};
