import { toggleModal, setProps } from './DayStatsModal.actions'

export function handleModal() {
  return (dispatch) => {
    dispatch(toggleModal())
  }
}

export function handleProps(date, totalDowntime) {
  return (dispatch) => {
    dispatch(setProps(date, totalDowntime))
  }
}
