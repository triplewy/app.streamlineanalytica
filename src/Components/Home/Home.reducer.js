import { YESTERDAY_RECAP, YESTERDAY_RECAP_SUCCESS, YESTERDAY_RECAP_FAILURE, WEEK_RECAP, WEEK_RECAP_SUCCESS, WEEK_RECAP_FAILURE } from './Home.actions'

const initialState = {
  yesterdayLoading: false,
  yesterdayLines: [],
  yesterdayMachines: [],
  yesterdayReports: [],
  yesterdayError: '',
  weekLoading: false,
  weekLines: [],
  weekMachines: [],
  weekReports: [],
  weekError: '',
}

export default function home(state = initialState, action) {
  switch (action.type) {
    case YESTERDAY_RECAP:
      return {
        ...state,
        yesterdayLoading: true,
        yesterdayError: ''
      }
    case YESTERDAY_RECAP_SUCCESS:
      return {
        ...state,
        yesterdayLoading: false,
        yesterdayLines: action.lines,
        yesterdayMachines: action.machines,
        yesterdayReports: action.reports,
        yesterdayError: ''
      }
    case YESTERDAY_RECAP_FAILURE:
      return {
        ...state,
        yesterdayLoading: false,
        yesterdayError: action.error
      }
    case WEEK_RECAP:
      return {
        ...state,
        weekLoading: true,
        weekError: ''
      }
    case WEEK_RECAP_SUCCESS:
      return {
        ...state,
        weekLoading: false,
        weekLines: action.lines,
        weekMachines: action.machines,
        weekReports: action.reports,
        weekError: ''
      }
    case WEEK_RECAP_FAILURE:
      return {
        ...state,
        weekLoading: false,
        weekError: action.error
      }
    default:
      return state
  }
}
