import {
  getReports, getReportsSuccess, getReportsFailure,
  updateReports, updateReportsSuccess, updateReportsFailure, updatePage, updateDate,
  setLineIndex, setMachineIndex
} from './Reports.actions'

import API from '../../api'

const api = new API()

export function fetchReports(lineId, machine, date) {
  return (dispatch) => {
    dispatch(getReports)
    return api.reports(lineId, machine, date ? date.toISOString() : '', 0)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(getReportsSuccess(data))
    })
    .catch(err => {
      dispatch(getReportsFailure(err))
    })
  }
}

export function fetchUpdateReports(lineId, machine, date, page) {
  return (dispatch) => {
    dispatch(updateReports)
    return api.reports(lineId, machine, date ? date.toISOString() : '', page)
    .then(res => res.json())
    .then(data => {
      dispatch(updateReportsSuccess(data))
    })
    .catch(err => {
      dispatch(updateReportsFailure(err))
    })

  }
}

export function setPage(page) {
  return (dispatch) => {
    dispatch(updatePage(page))
    return Promise.resolve()
  }
}

export function setDate(date) {
  return (dispatch) => {
    dispatch(updateDate(date))
    return Promise.resolve()
  }
}

export function setLine(index) {
  return (dispatch) => {
    dispatch(setLineIndex(index))
    return Promise.resolve()
  }
}

export function setMachine(index) {
  return (dispatch) => {
    dispatch(setMachineIndex(index))
    return Promise.resolve()
  }
}
