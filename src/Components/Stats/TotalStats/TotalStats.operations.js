import { getStats, getStatsSuccess, getStatsFailure } from './TotalStats.actions'
import { totalDowntime } from '../../../api'

export function fetchTotalStats(lineId, timePeriod) {
  return (dispatch) => {
    dispatch(getStats())
    return totalDowntime(lineId, timePeriod)
    .then(res => res.json())
    .then(data => {
      dispatch(getStatsSuccess(data.totalDowntime))
    })
    .catch((error) => {
      dispatch(getStatsFailure(error))
    });
  }
}
