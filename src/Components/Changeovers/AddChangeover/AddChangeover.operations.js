import {
  createChangeover, createChangeoverSuccess, createChangeoverFailure,
  addChangeoverStep, addChangeoverStepSuccess, addChangeoverStepFailure
} from './AddChangeover.actions'
import { fetchCreateChangeover } from '../../../api'

export function handleCreateChangeover(lineId, title) {
  return (dispatch) => {
    dispatch(createChangeover())
    return fetchCreateChangeover({ lineId: lineId, title: title })
    .then(res => res.json())
    .then(data => {
      dispatch(createChangeoverSuccess(data.changeoverId))
    })
    .catch(err => {
      dispatch(createChangeoverFailure(err))
    })
  }
}
