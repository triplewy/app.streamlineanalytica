import { GET_ACCOUNT, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './AccountModal.actions'

const initialState = {
  account: {},
  loading: false,
  error: '',
}

export default function accountModal(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNT:
      return {
        ...state,
        loading: true
      }
    case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.account,
        loading: false,
      }
    case GET_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case LOGOUT:
      return {
        ...state
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
