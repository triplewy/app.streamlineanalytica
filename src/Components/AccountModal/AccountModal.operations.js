import {
  getAccount, getAccountSuccess, getAccountFailure,
  logout, logoutFailure,
} from './AccountModal.actions'
import { sessionLoginSuccess } from '../../App/App.actions'
import API from '../../api'

const api = new API()

export function fetchAccount() {
  return (dispatch) => {
    dispatch(getAccount())
    return api.account()
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
    return api.logout()
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
