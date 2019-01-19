import { sessionLogin, sessionLoginSuccess, sessionLoginFailure } from './App.actions'
import { handleSessionLogin } from '../api'

export function fetchSessionLogin() {
  return (dispatch) => {
    dispatch(sessionLogin())
    return handleSessionLogin()
    .then(res => res.json())
    .then(data => {
      if (data.message === 'not logged in') {
        dispatch(sessionLoginFailure(data.message))
      } else {
        for (var i = 0; i < data.lines.length; i++) {
          data.lines[i].name = 'LINE ' + data.lines[i].name
        }
        dispatch(sessionLoginSuccess(data.lines, data.machines))
      }
    })
    .catch(err => {
      dispatch(sessionLoginFailure(err))
    })
  }
}
