import React from 'react';
import { fetchShiftStats } from './ShiftStats.operations'
import { connect } from 'react-redux'
import { downtimeString } from '../../Utilities/DowntimeString'

class ShiftStats extends React.Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this)
  }

  componentDidMount() {
    console.log(this.props.date);
    this.props.getShiftStats(this.props.lines[this.props.lineIndex].lineId, this.props.timePeriod, this.props.date)
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      console.log(this.props.date);
      this.props.getShiftStats(this.props.lines[this.props.lineIndex].lineId, this.props.timePeriod, this.props.date)
    }
  }



  renderItems() {
    var renderedItems = [];
    if (this.props.downtime.length > 0) {
      renderedItems = this.props.downtime.map((item, index) => {
        const downtime = item.totalDowntime
        const width = downtime / this.props.totalDowntime * 100
        const parsedDowntime = downtimeString(downtime)

        return (
          <li className='horizontalBar' key={index}>
            <p>{item.name}</p>
            <div style={{width: `${width}%`}}>
              <p>{`${Math.round(downtime / this.props.totalDowntime * 100)}%`}</p>
            </div>
            <p className='downtime'>{parsedDowntime}</p>
          </li>
        )
      })
    }
    return renderedItems
  }

  render() {
    return (
      <div className='DowntimeStats'>
        <div className='header'>
          <p>Shifts</p>
          <p></p>
        </div>
        <ul className='ShiftStats'>
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
    downtime: state.shiftStats.downtime,
    totalDowntime: state.shiftStats.totalDowntime,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getShiftStats: (lineId, timePeriod, date) => dispatch(fetchShiftStats(lineId, timePeriod, date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiftStats);
