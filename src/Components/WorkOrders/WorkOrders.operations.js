import {
  getWorkOrders, getWorkOrdersSuccess, getWorkOrdersFailure,
  finishWorkOrder, finishWorkOrderSuccess, finishWorkOrderFailure
} from './WorkOrders.actions'
import { fetchWorkOrders, fetchFinishWorkOrder } from '../../api'

export function workOrders() {
  return (dispatch) => {
    dispatch(getWorkOrders())
    return fetchWorkOrders()
    .then(res => res.json())
    .then(data => {
      dispatch(getWorkOrdersSuccess(data))
    })
    .catch(err => {
      dispatch(getWorkOrdersFailure(err))
    })
  }
}

export function onFinishPress(index, workOrderId) {
  return (dispatch) => {
    dispatch(finishWorkOrder(index))
    return fetchFinishWorkOrder({ workOrderId: workOrderId })
    .then(res => res.json())
    .then(data => {
      dispatch(finishWorkOrderSuccess(index, data.finishedDate))
    })
    .catch(err => {
      dispatch(finishWorkOrderFailure(index, err))
    })
  }
}
