import { APPROVE, APPROVE_SUCCESS, APPROVE_FAILURE } from './Approve.actions'

const initialState = {
  loading: false,
  error: '',
  success: false
}

export default function approve(state = initialState, action) {
  switch (action.type) {
    case APPROVE:
      return {
        loading: true,
        error: '',
        success: false
      }
    case APPROVE_SUCCESS:
      return {
        loading: false,
        error: '',
        success: true
      }
    case APPROVE_FAILURE:
      return {
        loading: false,
        error: action.error,
        success: false
      }
    default:
      return state
  }
}
