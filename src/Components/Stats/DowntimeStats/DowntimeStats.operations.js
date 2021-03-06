import { getStats, getStatsSuccess, getStatsFailure } from './DowntimeStats.actions'
import { statsLine } from '../../../api'

export function fetchDowntimeStats(lineId, timePeriod) {
  return (dispatch) => {
    dispatch(getStats())
    return statsLine(lineId, timePeriod)
    .then(res => res.json())
    .then(data => {
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
