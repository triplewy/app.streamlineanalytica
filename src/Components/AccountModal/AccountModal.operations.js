import {
  getAccount, getAccountSuccess, getAccountFailure,
  logout, logoutFailure,
} from './AccountModal.actions'
import { sessionLoginSuccess } from '../../App/App.actions'

const url = process.env.REACT_APP_API_URL

export function fetchAccount() {
  return (dispatch) => {
    dispatch(getAccount())
    return fetch(url + '/api/account', {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      dispatch(getAccountSuccess(data))
    })
    .catch((error) => {
      dispatch(getAccountFailure(error))
    })
  }
}

export function fetchLogout() {
  return (dispatch) => {
    dispatch(logout())
    return fetch(url + '/api/auth/logout', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      if (data.message === 'success') {
        dispatch(sessionLoginSuccess([], []))
        window.location.reload()
      } else {
        dispatch(logoutFailure(data.message))
      }
    })
    .catch((error) => {
      dispatch(logoutFailure(error))
    })
  }
}
