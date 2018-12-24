import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setDate } from '../Reports/Reports.operations'
import { Modal } from 'react-bootstrap'
import Calendar from 'react-calendar'
import calendarIcon from '../../Images/calendar-icon.png'
import closeIcon from '../../Images/close-icon.png'
import './DateSelector.css';

class DateSelector extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(date) {
    this.props.updateDate(date)
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    return (
      <div className='DateSelector'>
        <p className='dropdownLabel'>{`${this.props.label}:`}</p>
        <div className='calendarButton' onClick={() => this.setState({showModal: !this.state.showModal})}>
          <img src={calendarIcon} />
        </div>
        <p>{this.props.date ? this.props.date.toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', weekday: 'short', timeZone: 'UTC'}) : 'ALL DATES'}</p>
        {this.props.date ?
          <div onClick={() => this.props.updateDate('')}>
            <img src={closeIcon} />
          </div>
          :
          null
        }

        <Modal className='calendarModal' show={this.state.showModal} onHide={() => this.setState({showModal: !this.state.showModal})}>
          <Calendar onChange={this.onChange} value={this.props.date}/>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    date: state.reports.date
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateDate: (date) => dispatch(setDate(date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
