import { getStats, getStatsSuccess, getStatsFailure } from './DowntimeStats.actions'

const url = process.env.REACT_APP_API_URL

export function fetchDowntimeStats(lineId, timePeriod) {
  return (dispatch) => {
    dispatch(getStats())
    return fetch(url + '/api/stats/downtime/time/' + timePeriod + '/line/' + lineId, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      var downtime = []
      var average = 0
      for (var i = 0; i < data.length; i++) {
        downtime.push({time: data[i].time, downtime: data[i].totalDowntime, dateLabel: data[i].dateLabel, availableMin: data[i].availableMin})
        average += data[i].totalDowntime/data[i].availableMin
      }
      dispatch(getStatsSuccess(downtime, average, average/data.length))
    })
    .catch((error) => {
      dispatch(getStatsFailure(error))
    })

  }
}
