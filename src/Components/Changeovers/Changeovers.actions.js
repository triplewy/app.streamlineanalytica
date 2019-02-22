export const GET_CHANGEOVERS = 'GET_CHANGEOVERS'
export const GET_CHANGEOVERS_SUCCESS = 'GET_CHANGEOVERS_SUCCESS'
export const GET_CHANGEOVERS_FAILURE = 'GET_CHANGEOVERS_FAILURE'
export const SELECT_CHANGEOVER = 'SELECT_CHANGEOVER'

export function getChangeovers() {
  return {
    type: GET_CHANGEOVERS
  }
}

export function getChangeoversSuccess(data) {
  return {
    type: GET_CHANGEOVERS_SUCCESS,
    data: data
  }
}

export function getChangeoversFailure(error) {
  return {
    type: GET_CHANGEOVERS_FAILURE,
    error: error
  }
}

export function selectChangeover(changeover) {
  return {
    type: SELECT_CHANGEOVER,
    changeover: changeover
  }
}
