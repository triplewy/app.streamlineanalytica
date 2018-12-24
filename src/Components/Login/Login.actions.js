export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export function login() {
  return {
    type: LOGIN
  }
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error: error,
  }
}
