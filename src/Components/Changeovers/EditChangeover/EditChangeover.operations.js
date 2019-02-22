import { getChangeoverSteps, getChangeoverStepsSuccess, getChangeoverStepsFailure } from './EditChangeover.actions'
import { fetchChangeoverSteps } from '../../../api'

export function handleGetChangeoverSteps(changeoverId) {
  return (dispatch) => {
    dispatch(getChangeoverSteps())
    return fetchChangeoverSteps(changeoverId)
    .then(res => res.json())
    .then(data => {
      getChangeoverStepsSuccess(data)
    })
    .catch(err => {
      getChangeoverStepsFailure(err)
    })
  }
}
