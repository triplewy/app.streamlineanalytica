export const GET_CHANGEOVER_STEPS = 'GET_CHANGEOVER_STEPS'
export const GET_CHANGEOVER_STEPS_SUCCESS = 'GET_CHANGEOVER_STEPS_SUCCESS'
export const GET_CHANGEOVER_STEPS_FAILURE = 'GET_CHANGEOVER_STEPS_FAILURE'

export function getChangeoverSteps() {
  return {
    type: GET_CHANGEOVER_STEPS
  }
}

export function getChangeoverStepsSuccess(data) {
  return {
    type: GET_CHANGEOVER_STEPS_SUCCESS,
    data: data
  }
}

export function getChangeoverStepsFailure(error) {
  return {
    type: GET_CHANGEOVER_STEPS_FAILURE,
    error: error
  }
}
