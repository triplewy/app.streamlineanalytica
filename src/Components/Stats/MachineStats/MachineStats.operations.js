import { getStats, getStatsSuccess, getStatsFailure } from './MachineStats.actions'

const url = process.env.REACT_APP_API_URL

export function fetchMachineStats(lineId, timePeriod, date) {
  return (dispatch) => {
    dispatch(getStats())
    var api_url = '/api/stats/downtime/machines/time=' + timePeriod + '/line=' + lineId
    if (date) {
      api_url += '/' + date
    }
    return fetch(url + api_url, {
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
