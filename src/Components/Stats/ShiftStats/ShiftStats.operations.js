import { getStats, getStatsSuccess, getStatsFailure } from './ShiftStats.actions'
import { statsShifts } from '../../../api'

export function fetchShiftStats(lineId, timePeriod, date) {
  return (dispatch) => {
    dispatch(getStats())
    return statsShifts(lineId, timePeriod, date)
    .then(res => res.json())
    .then(data => {
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
