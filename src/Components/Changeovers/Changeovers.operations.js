import { getChangeovers, getChangeoversSuccess, getChangeoversFailure, selectChangeover } from './Changeovers.actions'
import { fetchChangeovers } from '../../api'

export function handleGetChangeovers() {
  return (dispatch) => {
    dispatch(getChangeovers())
    return fetchChangeovers()
    .then(res => res.json())
    .then(data => {
      dispatch(getChangeoversSuccess(data))
    })
    .catch(err => {
      dispatch(getChangeoversFailure(err))
    })
  }
}

export function handleSelectChangeover(changeover) {
  return (dispatch) => {
    dispatch(selectChangeover(changeover))
    return Promise.resolve()
  }
}
