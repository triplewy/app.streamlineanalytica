import { SWITCH_TAB } from './TabNavigator.actions'

const initialState = {
  tab: 0,
}

export default function tabNavigator(state = initialState, action) {
  switch (action.type) {
    case SWITCH_TAB:
      return {
        tab: action.tab,
      }
    default:
      return state
  }
}
