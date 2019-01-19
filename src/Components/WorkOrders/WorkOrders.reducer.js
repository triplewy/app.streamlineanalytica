import {
  GET_WORKORDERS, GET_WORKORDERS_SUCCESS, GET_WORKORDERS_FAILURE,
  FINISH_WORKORDER, FINISH_WORKORDER_SUCCESS, FINISH_WORKORDER_FAILURE
} from './WorkOrders.actions'

const initialState = {
  workOrders: [],
  loading: false,
  error: ''
}

export default function workOrders(state = initialState, action) {
  switch (action.type) {
    case GET_WORKORDERS:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case GET_WORKORDERS_SUCCESS:
      return {
        workOrders: action.data,
        error: '',
        loading: false
      }
    case GET_WORKORDERS_FAILURE:
      return {
        loading: false,
        error: action.error,
        workOrders: []
      }
    case FINISH_WORKORDER: {
      return {
        ...state,
        workOrders: state.workOrders.map((item, index) => index === action.index ? {...item, loading: true} : item)
      }
    }
    case FINISH_WORKORDER_SUCCESS: {
      return {
        ...state,
        workOrders: state.workOrders.map((item, index) => index === action.index ? {...item, loading: false, finishedDate: action.date} : item)
      }
    }
    case FINISH_WORKORDER_FAILURE: {
      return {
        ...state,
        workOrders: state.workOrders.map((item, index) => index === action.index ? {...item, loading: false, error: action.error} : item)
      }
    }
    default:
      return state
  }
}
