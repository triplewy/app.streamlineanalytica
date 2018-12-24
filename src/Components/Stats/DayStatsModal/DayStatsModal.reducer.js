import { TOGGLE_MODAL, SET_PROPS } from './DayStatsModal.actions'

const initialState = {
  showModal: false,
  date: '',
  totalDowntime: 0
}

export default function dayStatsModal(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        showModal: !state.showModal,
      }
    case SET_PROPS:
      return {
        showModal: true,
        date: action.date,
        totalDowntime: action.totalDowntime
      }
    default:
      return state
  }
}
