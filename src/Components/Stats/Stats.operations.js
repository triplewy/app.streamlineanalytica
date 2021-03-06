import { setLineIndex, setTimePeriod } from './Stats.actions'

export function setLine(index) {
  return (dispatch) => {
    dispatch(setLineIndex(index))
    return Promise.resolve()
  }
}

export function setTime(index) {
  return (dispatch) => {
    dispatch(setTimePeriod(index))
    return Promise.resolve()
  }
}
