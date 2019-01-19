import { getStats, getStatsSuccess, getStatsFailure } from './WorkerStats.actions'
import { statsWorkers } from '../../../api'

export function fetchWorkerStats(lineId, timePeriod, date) {
  return (dispatch) => {
    dispatch(getStats())
    return statsWorkers(lineId, timePeriod, date)
    .then(res => res.json())
    .then(data => {
      dispatch(getStatsSuccess(data))
    })
    .catch((error) => {
      dispatch(getStatsFailure(error))
    });
  }
}
