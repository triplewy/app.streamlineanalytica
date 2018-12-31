import { yesterdayRecap, yesterdayRecapSuccess, yesterdayRecapFailure, weekRecap, weekRecapSuccess, weekRecapFailure } from './Home.actions'
import API from '../../api'

const api = new API()

export function fetchYesterday() {
  return (dispatch) => {
    dispatch(yesterdayRecap())
    return api.yesterday()
    .then(res => res.json())
    .then(data => {
      if (data) {
        dispatch(yesterdayRecapSuccess(data.lines, data.machines, data.reports))
      } else {
        dispatch(yesterdayRecapFailure('No data'))
      }
    })
    .catch(err => {
      dispatch(yesterdayRecapFailure(err))
    })
  }
}

export function fetchWeek() {
  return (dispatch) => {
    dispatch(weekRecap())
    return api.week()
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data) {
        dispatch(weekRecapSuccess(data.lines, data.machines, data.reports))
      } else {
        dispatch(weekRecapFailure('No data'))
      }
    })
    .catch(err => {
      dispatch(weekRecapFailure(err))
    })
  }
}
