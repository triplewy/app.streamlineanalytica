import { getStats, getStatsSuccess, getStatsFailure } from './WorkerStats.actions'
import API from '../../../api'

const api = new API()

export function fetchWorkerStats(lineId, timePeriod, date) {
  return (dispatch) => {
    dispatch(getStats())
    return api.statsWorkers(lineId, timePeriod, date)
    .then(res => res.json())
    .then(data => {
      dispatch(getStatsSuccess(data))
    })
    .catch((error) => {
      dispatch(getStatsFailure(error))
    });
  }
}
