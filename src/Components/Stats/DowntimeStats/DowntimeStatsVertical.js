import React from 'react';
import { fetchDowntimeStats } from './DowntimeStats.operations'
import { connect } from 'react-redux'
import { parseTime } from '../../Utilities/ParseTime'
import { downtimeString } from '../../Utilities/DowntimeString'
import DowntimeItem from '../DowntimeItem/DowntimeItem'
import DayStatsModal from '../DayStatsModal/DayStatsModal'
import './DowntimeStats.css'

class DowntimeStatsVertical extends React.Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this)
  }

  componentDidMount() {
    if (this.props.lines.length > 0) {
      this.props.getDowntimeStats(this.props.lines[this.props.lineIndex].lineId, this.props.timePeriod)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.lineIndex !== prevProps.lineIndex || this.props.timePeriod !== prevProps.timePeriod) {
      if (this.props.lines.length > 0) {
        this.props.getDowntimeStats(this.props.lines[this.props.lineIndex].lineId, this.props.timePeriod)
      }
    }
  }

  renderItems() {
    var renderedItems = [];
    if (this.props.downtime.length > 0) {
      renderedItems = this.props.downtime.map((item, index) => {
        const currDate = parseTime(this.props.timePeriod, item.time)
        var availableMin = item.availableMin
        var downtime = item.downtime ? item.downtime : 0
        const height = downtime / availableMin * 300
        const parsedDowntime = downtimeString(downtime)
        return (
          <DowntimeItem
            clickable
            key={index}
            downtime={downtime}
            height={height}
            divisor={availableMin}
            label={item.dateLabel}
            date={item.time}
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
          <p>Downtime</p>
          <div>
            <p>Average:</p>
            <p>{`${(this.props.average ? this.props.average * 100 : 0).toFixed(2)}%`}</p>
          </div>
        </div>
        <ul>
          {this.renderItems()}
          {this.props.average ? <div className='averageLine' style={{bottom: 30 + this.props.average * 300}} /> : null}
        </ul>
        <DayStatsModal />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    timePeriod: state.stats.timePeriod,
    lineIndex: state.stats.lineIndex,
    lines: state.app.lines,
    downtime: state.downtimeStats.downtime,
    totalDowntime: state.downtimeStats.totalDowntime,
    average: state.downtimeStats.average
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDowntimeStats: (lineId, timePeriod) => dispatch(fetchDowntimeStats(lineId, timePeriod)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DowntimeStatsVertical);
