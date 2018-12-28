import { getStats, getStatsSuccess, getStatsFailure } from './TotalStats.actions'
import API from '../../../api'

const api = new API()

export function fetchTotalStats(lineId, timePeriod) {
  return (dispatch) => {
    dispatch(getStats())
    return api.totalDowntime(lineId, timePeriod)
    .then(res => res.json())
    .then(data => {
      dispatch(getStatsSuccess(data.totalDowntime))
    })
    .catch((error) => {
      dispatch(getStatsFailure(error))
    });
  }
}
