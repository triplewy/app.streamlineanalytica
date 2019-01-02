import { yesterdayRecap, yesterdayRecapSuccess, yesterdayRecapFailure, weekRecap, weekRecapSuccess, weekRecapFailure } from './Home.actions'
import API from '../../api'

const api = new API()

export function fetchYesterday() {
  return (dispatch) => {
    dispatch(yesterdayRecap())
    return api.yesterday()
    .then(res => res.json())
    .then(data => {
      if (data.message === 'not logged in') {
        dispatch(yesterdayRecapFailure('No data'))
      } else {
        dispatch(yesterdayRecapSuccess(data.lines, data.machines, data.reports))
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
      if (data.message === 'not logged in') {
        dispatch(weekRecapFailure('No data'))
      } else {
        dispatch(weekRecapSuccess(data.lines, data.machines, data.reports))
      }
    })
    .catch(err => {
      dispatch(weekRecapFailure(err))
    })
  }
}
