const url = process.env.REACT_APP_API_URL

const getParams = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
}

function putParams(body) {
  return {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body)
  }
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

export function signIn(body) {
  return fetch(`${url}/auth/signin`, postParams(body))
}

export function adminSignIn(body) {
  return fetch(`${url}/auth/signin/admin`, postParams(body))
}

export function signUp(body) {
  return fetch(`${url}/auth/signup`, postParams(body))
}

export function logout() {
  return fetch(`${url}/auth/logout`, postParams())
}

export function handleSessionLogin() {
  return fetch(`${url}/sessionlogin`, getParams)
}

export function yesterday() {
  return fetch(`${url}/home/recap/yesterday`, getParams)
}

export function week() {
  return fetch(`${url}/home/recap/week`, getParams)
}

export function account() {
  return fetch(`${url}/account`, getParams)
}

export function submit(formdata) {
  return fetch(`${url}/input/submit`, postParamsFormdata(formdata))
}

export function fetchApprove(body) {
  return fetch(`${url}/workorder/approve`, putParams(body))
}

export function fetchWorkOrders() {
  return fetch(`${url}/workorder`, getParams)
}

export function fetchFinishWorkOrder(body) {
  return fetch(`${url}/workorder`, putParams(body))
}

export function reports(lineId, machine, date, page) {
  if (machine.machineId) {
    if (date) {
      return fetch(`${url}/reports/machine/${machine.machineId}/date/${date}/page/${page}`, getParams)
    } else {
      return fetch(`${url}/reports/machine/${machine.machineId}/page/${page}`, getParams)
    }
  } else {
    if (date) {
      return fetch(`${url}/reports/line/${lineId}/date/${date}/page/${page}`, getParams)
    } else {
      return fetch(`${url}/reports/line/${lineId}/page/${page}`, getParams)
    }
  }
}

export function totalDowntime(lineId, timePeriod) {
  return fetch(`${url}/stats/totaldowntime/line/${lineId}/timePeriod/${timePeriod}`, getParams)
}


export function statsLine(lineId, timePeriod) {
  return fetch(`${url}/stats/downtime/line/${lineId}/timePeriod/${timePeriod}`, getParams)
}

export function statsMachines(lineId, timePeriod, date) {
  if (date) {
    return fetch(`${url}/stats/downtime/line/${lineId}/timePeriod/${timePeriod}/machines/date/${date}`, getParams)
  } else {
    return fetch(`${url}/stats/downtime/line/${lineId}/timePeriod/${timePeriod}/machines`, getParams)
  }
}

export function statsWorkers(lineId, timePeriod, date) {
  if (date) {
    return fetch(`${url}/stats/downtime/line/${lineId}/timePeriod/${timePeriod}/workers/date/${date}`, getParams)
  } else {
    return fetch(`${url}/stats/downtime/line/${lineId}/timePeriod/${timePeriod}/workers`, getParams)
  }
}

export function statsShifts(lineId, timePeriod, date) {
  return fetch(`${url}/stats/downtime/line/${lineId}/timePeriod/${timePeriod}/shifts/date/${date}`, getParams)
}
