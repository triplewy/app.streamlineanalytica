import {
  CREATE_CHANGEOVER, CREATE_CHANGEOVER_SUCCESS, CREATE_CHANGEOVER_FAILURE,
  ADD_CHANGEOVER_STEP, ADD_CHANGEOVER_STEP_SUCCESS, ADD_CHANGEOVER_STEP_FAILURE
} from './AddChangeover.actions'

const initialState = {
  changeoverId: null,
  steps: [],
  createLoading: false,
  stepLoading: false,
  created: false,
  createError: '',
  stepError: ''
}

export default function addChangeover(state = initialState, action) {
  switch (action.type) {
    case CREATE_CHANGEOVER:
      return {
        ...state,
        createLoading: true,
        createError: ''
      }
    case CREATE_CHANGEOVER_SUCCESS:
      return {
        ...state,
        changeoverId: action.changeoverId,
        createLoading: false,
        created: true
      }
    case CREATE_CHANGEOVER_FAILURE:
      return {
        ...state,
        createLoading: false,
        createError: action.error
      }
    case ADD_CHANGEOVER_STEP: {
      return {
        ...state,
        stepLoading: true,
        stepError: ''
      }
    }
    case ADD_CHANGEOVER_STEP_SUCCESS: {
      return {
        ...state,
        stepLoading: false
      }
    }
    case ADD_CHANGEOVER_STEP_FAILURE: {
      return {
        ...state,
        stepLoading: false,
        stepError: action.error
      }
    }
    default:
      return state
  }
}
