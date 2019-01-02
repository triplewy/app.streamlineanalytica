const url = process.env.REACT_APP_API_URL

const getParams = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
}

function postParams(body) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body)
  }
}

function postParamsFormdata(formdata) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/formdata',
    },
    credentials: 'include',
    body: formdata
  }
}

export default class API {

  signIn(body) {
    return fetch(`${url}/auth/signin`, postParams(body))
  }

  adminSignIn(body) {
    return fetch(`${url}/auth/signin/admin`, postParams(body))
  }

  signUp(body) {
    return fetch(`${url}/auth/signup`, postParams(body))
  }

  logout() {
    return fetch(`${url}/auth/logout`, postParams())
  }

  sessionLogin() {
    return fetch(`${url}/sessionlogin`, getParams)
  }

  yesterday() {
    return fetch(`${url}/home/recap/yesterday`, getParams)
  }

  week() {
    return fetch(`${url}/home/recap/week`, getParams)
  }

  account() {
    return fetch(`${url}/account`, getParams)
  }

  submit(formdata) {
    return fetch(`${url}/input/submit`, postParamsFormdata(formdata))
  }

  reports(lineId, machine, date, page) {
    if (machine.machineId) {
      if (date) {
        return fetch(`${url}/reports/machine=${machine.machineId}/date=${date}/page=${page}`, getParams)
      } else {
        return fetch(`${url}/reports/machine=${machine.machineId}/page=${page}`, getParams)
      }
    } else {
      if (date) {
        return fetch(`${url}/reports/line=${lineId}/date=${date}/page=${page}`, getParams)
      } else {
        return fetch(`${url}/reports/line=${lineId}/page=${page}`, getParams)
      }
    }
  }

  totalDowntime(lineId, timePeriod) {
    return fetch(`${url}/stats/totaldowntime/line=${lineId}/timePeriod=${timePeriod}`, getParams)
  }

  statsLine(lineId, timePeriod) {
    return fetch(`${url}/stats/downtime/line=${lineId}/timePeriod=${timePeriod}`, getParams)
  }

  statsMachines(lineId, timePeriod, date) {
    if (date) {
      return fetch(`${url}/stats/downtime/line=${lineId}/timePeriod=${timePeriod}/machines/date=${date}`, getParams)
    } else {
      return fetch(`${url}/stats/downtime/line=${lineId}/timePeriod=${timePeriod}/machines`, getParams)
    }
  }

  statsWorkers(lineId, timePeriod, date) {
    if (date) {
      return fetch(`${url}/stats/downtime/line=${lineId}/timePeriod=${timePeriod}/workers/date=${date}`, getParams)
    } else {
      return fetch(`${url}/stats/downtime/line=${lineId}/timePeriod=${timePeriod}/workers`, getParams)
    }
  }

  statsShifts(lineId, timePeriod, date) {
    return fetch(`${url}/stats/downtime/line=${lineId}/timePeriod=${timePeriod}/shifts/date=${date}`, getParams)
  }

}
