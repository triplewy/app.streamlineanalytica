import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './Login.actions'

const initialState = {
  loading: false,
  error: '',
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        loading: true,
        error: ''
      }
    case LOGIN_SUCCESS:
      return {
        loading: false,
        error: '',
      }
    case LOGIN_FAILURE:
      return {
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}
