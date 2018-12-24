import React from 'react';
import { fetchMachineStats } from './MachineStats.operations'
import { connect } from 'react-redux'
import { downtimeString } from '../../Utilities/DowntimeString'
import DowntimeItem from '../DowntimeItem/DowntimeItem'
import '../DowntimeStats/DowntimeStats.css'

class MachineStats extends React.Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this)
  }

  componentDidMount() {
    if (this.props.lines.length > 0) {
      this.props.getMachineStats(this.props.lines[this.props.lineIndex].lineId, this.props.timePeriod, this.props.date)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.lineIndex !== prevProps.lineIndex || this.props.timePeriod !== prevProps.timePeriod || this.props.date !== prevProps.date) {
      if (this.props.lines.length > 0) {
        this.props.getMachineStats(this.props.lines[this.props.lineIndex].lineId, this.props.timePeriod, this.props.date)
      }
    }
  }

  renderItems() {
    var renderedItems = [];
    if (this.props.downtime.length > 0) {
      renderedItems = this.props.downtime.map((item, index) => {
        const downtime = item.totalDowntime
        const height = downtime / this.props.totalDowntime * 300
        return (
          <DowntimeItem
            key={index}
            downtime={downtime}
            height={height}
            divisor={this.props.totalDowntime}
            label={item.name}
          />
        )
      })
    }
    return renderedItems
  }

  render() {
    return (
      <div className='DowntimeStats'>
        <div className='header'>
          <p>Machines</p>
          <p></p>
        </div>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    timePeriod: state.stats.timePeriod,
    lineIndex: state.stats.lineIndex,
    lines: state.app.lines,
    downtime: state.machineStats.downtime,
    totalDowntime: state.machineStats.totalDowntime,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMachineStats: (lineId, timePeriod, date) => dispatch(fetchMachineStats(lineId, timePeriod, date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MachineStats);
