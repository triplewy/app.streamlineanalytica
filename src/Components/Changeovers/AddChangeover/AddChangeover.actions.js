export const CREATE_CHANGEOVER = 'CREATE_CHANGEOVER'
export const CREATE_CHANGEOVER_SUCCESS = 'CREATE_CHANGEOVER_SUCCESS'
export const CREATE_CHANGEOVER_FAILURE = 'CREATE_CHANGEOVER_FAILURE'

export const ADD_CHANGEOVER_STEP = 'ADD_CHANGEOVER_STEP'
export const ADD_CHANGEOVER_STEP_SUCCESS = 'ADD_CHANGEOVER_STEP_SUCCESS'
export const ADD_CHANGEOVER_STEP_FAILURE = 'ADD_CHANGEOVER_STEP_FAILURE'

export function createChangeover() {
  return {
    type: CREATE_CHANGEOVER
  }
}

export function createChangeoverSuccess(data) {
  return {
    type: CREATE_CHANGEOVER_SUCCESS,
    data: data
  }
}

export function createChangeoverFailure(error) {
  return {
    type: CREATE_CHANGEOVER_FAILURE,
    error: error
  }
}

export function addChangeoverStep() {
  return {
    type: ADD_CHANGEOVER_STEP,
  }
}

export function addChangeoverStepSuccess() {
  return {
    type: ADD_CHANGEOVER_STEP_SUCCESS,
  }
}

export function addChangeoverStepFailure(error) {
  return {
    type: ADD_CHANGEOVER_STEP_FAILURE,
    error: error
  }
}
