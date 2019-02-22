import { GET_CHANGEOVERS, GET_CHANGEOVERS_SUCCESS, GET_CHANGEOVERS_FAILURE, SELECT_CHANGEOVER } from './Changeovers.actions'

const initialState = {
  loading: false,
  changeovers: [],
  error: '',
  selectedChangeover: null
}

export default function changeovers(state = initialState, action) {
  switch (action.type) {
    case GET_CHANGEOVERS:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case GET_CHANGEOVERS_SUCCESS:
      return {
        ...state,
        loading: false,
        changeovers: action.data
      }
    case GET_CHANGEOVERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case SELECT_CHANGEOVER:
      return {
        ...state,
        selectedChangeover: action.changeover
      }
    default:
      return state
  }
}
