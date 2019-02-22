import { GET_CHANGEOVER_STEPS, GET_CHANGEOVER_STEPS_SUCCESS, GET_CHANGEOVER_STEPS_FAILURE } from './EditChangeover.actions'

const initialState = {
  loading: false,
  steps: [],
  error: ''
}

export default function editChangeovers(state = initialState, action) {
  switch (action.type) {
    case GET_CHANGEOVER_STEPS:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case GET_CHANGEOVER_STEPS_SUCCESS:
      return {
        ...state,
        loading: false,
        steps: action.data
      }
    case GET_CHANGEOVER_STEPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
