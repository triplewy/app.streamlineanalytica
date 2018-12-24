import React from 'react';
import { handleModal, handleProps } from '../DayStatsModal/DayStatsModal.operations'
import { connect } from 'react-redux'
import { downtimeString } from '../../Utilities/DowntimeString'
import './DowntimeItem.css'

class DowntimeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    if (this.props.clickable && this.props.timePeriod < 3) {
      this.props.setProps(this.props.date, this.props.downtime)
    }
  }

  render() {
    const parsedDowntime = downtimeString(this.props.downtime)
    return (
      <li
        className={this.props.clickable && this.props.timePeriod < 3 ? 'downtimeItem' : ''}
      >
        <p className='downtime'>{parsedDowntime}</p>
        <div style={{height: `${this.props.height}px`}} onClick={this.toggleModal}>
          <p className='downtimePercentage'>{Math.round(this.props.downtime / this.props.divisor * 100) + '%'}</p>
        </div>
        <p className='dateLabel'>{this.props.label}</p>
      </li>
    )
  }
}

function mapStateToProps(state) {
  return {
    timePeriod: state.stats.timePeriod
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleModal: () => dispatch(handleModal()),
    setProps: (date, totalDowntime) => dispatch(handleProps(date, totalDowntime))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DowntimeItem);
