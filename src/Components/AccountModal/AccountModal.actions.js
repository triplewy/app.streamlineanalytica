export const GET_ACCOUNT = 'GET_ACCOUNT'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_FAILURE = 'GET_ACCOUNT_FAILURE'

export const LOGOUT = 'LOGOUT'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export function getAccount() {
  return {
    type: GET_ACCOUNT
  }
}

export function getAccountSuccess(data) {
  return {
    type: GET_ACCOUNT_SUCCESS,
    account: data
  }
}

export function getAccountFailure(error) {
  return {
    type: GET_ACCOUNT_SUCCESS,
    error: error
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

export function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    error: error
  }
}
