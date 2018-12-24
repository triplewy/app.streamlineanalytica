import React from 'react';
import { setLine, setTime } from './Stats.operations'
import { connect } from 'react-redux'
import DropdownSelectorList from '../DropdownSelector/DropdownSelectorList'
import TotalStats from './TotalStats/TotalStats'
import DowntimeStatsVertical from './DowntimeStats/DowntimeStatsVertical'
import MachineStats from './MachineStats/MachineStats'
import WorkerStats from './WorkerStats/WorkerStats'
import './Stats.css'

class Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <div className='Stats'>
        <DropdownSelectorList items={[
          {
            label: 'Line',
            items: this.props.lines,
            index: this.props.lineIndex,
            setIndex: this.props.setLineIndex
          },
          {
            label: 'Time Period',
            items: [{name: 'LAST 24 HOURS'}, {name: 'LAST 7 DAYS'}, {name: 'LAST 30 DAYS'}, {name: 'LAST 12 MONTHS'}, {name: 'ALL TIME'}],
            index: this.props.timePeriod,
            setIndex: this.props.setTimePeriod
          }
        ]}
        />
        <TotalStats />
        <DowntimeStatsVertical />
        <MachineStats />
        <WorkerStats />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    lines: state.app.lines,
    lineIndex: state.stats.lineIndex,
    timePeriod: state.stats.timePeriod,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLineIndex: (index) => dispatch(setLine(index)),
    setTimePeriod: (index) => dispatch(setTime(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
