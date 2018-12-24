import { SET_STATS_LINE_INDEX, SET_TIME_PERIOD } from './Stats.actions'

const initialState = {
  lineIndex: 0,
  timePeriod: 1,
  refreshing: false
}

export default function stats(state = initialState, action) {
  switch (action.type) {
    case SET_STATS_LINE_INDEX:
      return {
        ...state,
        lineIndex: action.index,
      }
    case SET_TIME_PERIOD:
      return {
        ...state,
        timePeriod: action.index
      }
    default:
      return state
  }
}
