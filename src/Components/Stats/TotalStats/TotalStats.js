import React from 'react';
import { fetchTotalStats } from './TotalStats.operations'
import { connect } from 'react-redux'
import { downtimeString } from '../../Utilities/DowntimeString'
import './TotalStats.css'

class TotalStats extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.lines.length > 0) {
      this.props.getTotalStats(this.props.lines[this.props.lineIndex].lineId, this.props.timePeriod)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.timePeriod !== prevProps.timePeriod || this.props.lineIndex !== prevProps.lineIndex) {
      if (this.props.lines.length > 0) {
        this.props.getTotalStats(this.props.lines[this.props.lineIndex].lineId, this.props.timePeriod)
      }
    }
  }

  render() {
    const parsedDowntime = downtimeString(this.props.downtime)

    return (
      <div className='DowntimeStats'>
        <div className='TotalStats'>
          <p>Total Downtime</p>
          <p>{parsedDowntime}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    timePeriod: state.stats.timePeriod,
    lineIndex: state.stats.lineIndex,
    lines: state.app.lines,
    downtime: state.totalStats.downtime
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTotalStats: (lineId, timePeriod) => dispatch(fetchTotalStats(lineId, timePeriod))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalStats);
