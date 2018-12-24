export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const SET_PROPS = 'SET_PROPS'

export function toggleModal() {
  return{
    type: TOGGLE_MODAL
  }
}

export function setProps(date, totalDowntime) {
  return {
    type: SET_PROPS,
    date: date,
    totalDowntime: totalDowntime
  }
}
