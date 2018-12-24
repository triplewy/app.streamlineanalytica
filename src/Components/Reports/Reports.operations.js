import {
  getReports, getReportsSuccess, getReportsFailure,
  updateReports, updateReportsSuccess, updateReportsFailure, updatePage, updateDate,
  setLineIndex, setMachineIndex
} from './Reports.actions'

const url = process.env.REACT_APP_API_URL

export function fetchReports(lineId, machine, date) {
  return (dispatch) => {
    dispatch(getReports)
    var api_url = url

    if (machine.machineId) {
      api_url += '/api/reports/machine=' + machine.machineId
    } else {
      api_url += '/api/reports/line/' + lineId
    }

    if (date) {
      api_url += '/date=' + date.toISOString()
    }

    api_url += '/page=0'

    return fetch(api_url, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
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

    var api_url = url

    if (machine.machineId) {
      api_url += '/api/reports/machine=' + machine.machineId
    } else {
      api_url += '/api/reports/line/' + lineId
    }

    if (date) {
      api_url += '/date=' + date.toISOString()
    }

    api_url += '/page=' + page

    return fetch(api_url, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
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
