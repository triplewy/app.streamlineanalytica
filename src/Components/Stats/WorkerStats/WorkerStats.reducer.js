import { GET_WORKER_STATS, GET_WORKER_STATS_SUCCESS, GET_WORKER_STATS_FAILURE } from './WorkerStats.actions'

const initialState = {
  loading: false,
  downtime: [],
  error: ''
}

export default function workerStats(state = initialState, action) {
  switch (action.type) {
    case GET_WORKER_STATS:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case GET_WORKER_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        downtime: action.downtime,
        totalDowntime: action.totalDowntime
      }
    case GET_WORKER_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
