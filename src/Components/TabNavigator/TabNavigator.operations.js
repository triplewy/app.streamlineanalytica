import { switchTab } from './TabNavigator.actions'

export function handleTab(tab) {
  return (dispatch) => {
    dispatch(switchTab(tab))
  }
}
