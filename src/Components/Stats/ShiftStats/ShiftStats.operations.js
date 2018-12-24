import { getStats, getStatsSuccess, getStatsFailure } from './ShiftStats.actions'

const url = process.env.REACT_APP_API_URL

export function fetchShiftStats(lineId, timePeriod, date) {
  return (dispatch) => {
    dispatch(getStats())
    return fetch(url + '/api/stats/downtime/shifts/line=' + lineId + '/' + timePeriod + '/' + date, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      var totalDowntime = 0
      for (var i = 0; i < data.length; i++) {
        totalDowntime += data[i].totalDowntime
      }
      dispatch(getStatsSuccess(data, totalDowntime))
    })
    .catch((error) => {
      dispatch(getStatsFailure(error))
    });
  }
}
