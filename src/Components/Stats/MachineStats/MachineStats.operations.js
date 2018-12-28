import { getStats, getStatsSuccess, getStatsFailure } from './MachineStats.actions'
import API from '../../../api'

const api = new API()

export function fetchMachineStats(lineId, timePeriod, date) {
  return (dispatch) => {
    dispatch(getStats())
    return api.statsMachines(lineId, timePeriod, date)
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
