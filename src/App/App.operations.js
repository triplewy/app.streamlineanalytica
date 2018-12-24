import { sessionLogin, sessionLoginSuccess, sessionLoginFailure } from './App.actions'

const url = process.env.REACT_APP_API_URL

export function fetchSessionLogin() {
  return (dispatch) => {
    dispatch(sessionLogin())
    return fetch(url + '/api/sessionLogin', {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
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
