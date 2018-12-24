import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleModal } from './DayStatsModal.operations'
import { setDate, setLine } from '../../Reports/Reports.operations'
import { handleTab } from '../../TabNavigator/TabNavigator.operations'
import { Modal } from 'react-bootstrap'
import { downtimeString } from '../../Utilities/DowntimeString'
import MachineStats from '../MachineStats/MachineStats'
import WorkerStats from '../WorkerStats/WorkerStats'
import ShiftStats from '../ShiftStats/ShiftStats'
import './DayStatsModal.css';

class DayStatsModal extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.goToReports = this.goToReports.bind(this)
  }

  goToReports() {
    this.props.setLineIndex(this.props.lineIndex)
    this.props.updateDate(new Date(this.props.date))
    this.props.switchTab(1)
    this.props.toggleModal()
    this.props.history.push('/reports')
  }

  render() {
    console.log(this.props.date);
    const dateString = new Date(this.props.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric', weekday: 'long', timeZone: 'UTC'})
    return (
      <Modal show={this.props.showModal} onHide={this.props.toggleModal} id='DayStatsModal'>
        <Modal.Header closeButton>
          <Modal.Title>{`${dateString} - ${this.props.lines[this.props.lineIndex].name}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='DayStatsModal'>
          <div className='reportsButton' onClick={this.goToReports}>
            <p>GO TO REPORTS</p>
          </div>
          <div className='DowntimeStats'>
            <div className='TotalStats'>
              <p>Total Downtime</p>
              <p>{downtimeString(this.props.totalDowntime)}</p>
            </div>
          </div>
          <MachineStats date={this.props.date} />
          <WorkerStats date={this.props.date} />
          <ShiftStats date={this.props.date} />
        </Modal.Body>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.dayStatsModal.showModal,
    date: state.dayStatsModal.date,
    totalDowntime: state.dayStatsModal.totalDowntime,
    lines: state.app.lines,
    lineIndex: state.stats.lineIndex
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleModal: () => dispatch(handleModal()),
    setLineIndex: (index) => dispatch(setLine(index)),
    updateDate: (date) => dispatch(setDate(date)),
    switchTab: (tab) => dispatch(handleTab(tab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DayStatsModal))
