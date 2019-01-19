import {
  getAccount, getAccountSuccess, getAccountFailure,
  handleLogout, logoutFailure,
} from './AccountModal.actions'
import { sessionLoginSuccess } from '../../App/App.actions'
import { account, logout } from '../../api'

export function fetchAccount() {
  return (dispatch) => {
    dispatch(getAccount())
    return account()
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
    dispatch(handleLogout())
    return logout()
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
