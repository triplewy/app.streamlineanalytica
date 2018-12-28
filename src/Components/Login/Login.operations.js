import { login, loginSuccess, loginFailure } from './Login.actions'
import { sessionLoginSuccess } from '../../App/App.actions'
import API from '../../api'

const api = new API()

export function fetchLogin(username, password) {
  return (dispatch) => {
    dispatch(login())
    return api.signIn({username: username, password: password})
    .then(res => {
      if (res.status === 401) {
        return {message: 'not logged in'}
      } else {
        return res.json()
      }
    })
    .then(data => {
      if (data.message === 'not logged in') {
        dispatch(loginFailure('Incorrect username or password'))
      } else {
        for (var i = 0; i < data.lines.length; i++) {
          data.lines[i].name = 'LINE ' + data.lines[i].name
        }
        dispatch(loginSuccess())
        dispatch(sessionLoginSuccess(data.lines, data.machines))
      }
    })
    .catch(err => {
      dispatch(loginFailure('Unable to login at this time'))
    })
  }
}

export function fetchSignup(username, password, confirmPassword) {
  return (dispatch) => {
    if (!username) {
      dispatch(loginFailure('Must have username'))
    } else if (password.length < 6) {
      dispatch(loginFailure('Password must be at least 6 characters'))
    } else if (confirmPassword !== password) {
      dispatch(loginFailure('Confirm password does not match password'))
    } else {
      dispatch(login())
      return api.signUp({username: username, password: password})
      .then(res => {
        if (res.status === 401) {
          return {message: 'not logged in'}
        } else {
          return res.json()
        }
      })
      .then(data => {
        if (data.message === 'success') {
          dispatch(loginSuccess())
          dispatch(sessionLoginSuccess([], []))
        } else {
          dispatch(loginFailure(data.message))
        }
      })
      .catch(err => {
        dispatch(loginFailure('Unable to signup at this time'))
      })
    }
  }
}
