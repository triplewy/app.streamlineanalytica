import { getStats, getStatsSuccess, getStatsFailure } from './TotalStats.actions'

const url = process.env.REACT_APP_API_URL

export function fetchTotalStats(lineId, timePeriod) {
  return (dispatch) => {
    dispatch(getStats())
    return fetch(url + '/api/stats/totalDowntime/' + timePeriod + '/' + lineId, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(getStatsSuccess(data.totalDowntime))
    })
    .catch((error) => {
      dispatch(getStatsFailure(error))
    });
  }
}
