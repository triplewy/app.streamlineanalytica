export const GET_WORKORDERS = 'GET_WORKORDERS'
export const GET_WORKORDERS_SUCCESS = 'GET_WORKORDERS_SUCCESS'
export const GET_WORKORDERS_FAILURE = 'GET_WORKORDERS_FAILURE'

export const FINISH_WORKORDER = 'FINISH_WORKORDER'
export const FINISH_WORKORDER_SUCCESS = 'FINISH_WORKORDER_SUCCESS'
export const FINISH_WORKORDER_FAILURE = 'FINISH_WORKORDER_FAILURE'

export function getWorkOrders() {
  return {
    type: GET_WORKORDERS
  }
}

export function getWorkOrdersSuccess(data) {
  return {
    type: GET_WORKORDERS_SUCCESS,
    data: data
  }
}

export function getWorkOrdersFailure(error) {
  return {
    type: GET_WORKORDERS_FAILURE,
    error: error
  }
}

export function finishWorkOrder(index) {
  return {
    type: FINISH_WORKORDER,
    index: index
  }
}

export function finishWorkOrderSuccess(index, date) {
  return {
    type: FINISH_WORKORDER_SUCCESS,
    index: index,
    date: date
  }
}

export function finishWorkOrderFailure(index, error) {
  return {
    type: FINISH_WORKORDER_FAILURE,
    index: index,
    error: error
  }
}
