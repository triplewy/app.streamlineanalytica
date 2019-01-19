import { approve, approveSuccess, approveFailure } from './Approve.actions'
import { fetchApprove } from '../../api'

export function handleApprove(hash) {
  return (dispatch) => {
    dispatch(approve())
    return fetchApprove({ hash: hash })
    .then(res => res.json())
    .then(data => {
      if (data.message === 'success') {
        dispatch(approveSuccess())
      } else {
        dispatch(approveFailure(data.message))
      }
    })
    .catch(err => {
      dispatch(approveFailure(err))
    })
  }
}
