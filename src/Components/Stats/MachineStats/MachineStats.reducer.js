import { GET_MACHINE_STATS, GET_MACHINE_STATS_SUCCESS, GET_MACHINE_STATS_FAILURE } from './MachineStats.actions'

const initialState = {
  loading: false,
  fetched: false,
  downtime: [],
  totalDowntime: 0,
  error: ''
}

export default function machineStats(state = initialState, action) {
  switch (action.type) {
    case GET_MACHINE_STATS:
      return {
        ...state,
        loading: true,
        fetched: false
      }
    case GET_MACHINE_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        downtime: action.downtime,
        totalDowntime: action.totalDowntime
      }
    case GET_MACHINE_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        fetched: true,
        error: action.error
      }
    default:
      return state
  }
}
