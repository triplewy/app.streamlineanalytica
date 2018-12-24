import { login, loginSuccess, loginFailure } from './Login.actions'
import { sessionLoginSuccess } from '../../App/App.actions'

const url = process.env.REACT_APP_API_URL

export function fetchLogin(username, password) {
  return (dispatch) => {
    console.log(url);
    dispatch(login())
    return fetch(url + '/api/auth/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
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
      return fetch(url + '/api/auth/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(data => {
        if (data.message === 'success') {
          dispatch(loginSuccess())
        } else {
          dispatch(loginFailure(data.message))
        }
      })
      .catch(err => {
        dispatch(loginFailure(err))
      })
    }
  }
}
