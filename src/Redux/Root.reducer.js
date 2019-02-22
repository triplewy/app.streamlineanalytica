import { combineReducers } from 'redux';
import app from '../App/App.reducer'
import home from '../Components/Home/Home.reducer'
import login from '../Components/Login/Login.reducer'
import tabNavigator from '../Components/TabNavigator/TabNavigator.reducer'
import reports from '../Components/Reports/Reports.reducer'
import stats from '../Components/Stats/Stats.reducer'
import downtimeStats from '../Components/Stats/DowntimeStats/DowntimeStats.reducer'
import machineStats from '../Components/Stats/MachineStats/MachineStats.reducer'
import workerStats from '../Components/Stats/WorkerStats/WorkerStats.reducer'
import totalStats from '../Components/Stats/TotalStats/TotalStats.reducer'
import accountModal from '../Components/AccountModal/AccountModal.reducer'
import dayStatsModal from '../Components/Stats/DayStatsModal/DayStatsModal.reducer'
import shiftStats from '../Components/Stats/ShiftStats/ShiftStats.reducer'
import approve from '../Components/Approve/Approve.reducer'
import workOrders from '../Components/WorkOrders/WorkOrders.reducer'
import addChangeover from '../Components/Changeovers/AddChangeover/AddChangeover.reducer'
import changeovers from '../Components/Changeovers/Changeovers.reducer'
import editChangeovers from '../Components/Changeovers/EditChangeover/EditChangeover.reducer'

export default combineReducers({
  app,
  home,
  login,
  tabNavigator,
  reports,
  stats,
  downtimeStats,
  machineStats,
  workerStats,
  accountModal,
  totalStats,
  dayStatsModal,
  shiftStats,
  approve,
  workOrders,
  addChangeover,
  changeovers,
  editChangeovers
});
