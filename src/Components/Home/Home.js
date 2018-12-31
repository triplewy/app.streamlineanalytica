import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchYesterday, fetchWeek } from './Home.operations'
import { Jumbotron } from 'react-bootstrap'
import { downtimeString } from '../Utilities/DowntimeString'
import ReportItem from '../Reports/ReportItem/ReportItem'
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props)

    this.renderLines = this.renderLines.bind(this)
    this.renderMachines = this.renderMachines.bind(this)
    this.renderReports = this.renderReports.bind(this)
  }

  componentDidMount() {
    this.props.getYesterday()
    this.props.getWeek()
  }

  renderLines(lines) {
    var renderedItems = lines.map((item, index) => {
      return (
        <li key={index}>
          <p>{`LINE ${item.name}`}</p>
          <div>
            <p className='percentage'>{`${item.percentage.toFixed(2)}%`}</p>
            <p className='downtime'>{downtimeString(item.totalDowntime)}</p>
          </div>
        </li>
      )
    })

    return renderedItems
  }

  renderMachines(machines) {
    var renderedItems = machines.map((item, index) => {
      return (
        <li key={index}>
          <p className='line'>{`LINE ${item.line}`}</p>
          <p className='machine'>{item.name}</p>
          <div>
            <p className='percentage'>{`${item.percentage.toFixed(2)}%`}</p>
            <p className='downtime'>{downtimeString(item.totalDowntime)}</p>
          </div>
        </li>
      )
    })

    return renderedItems
  }

  renderReports(reports) {
    var renderedItems = reports.map((item, index) => {
      return (
        <li key={index}>
          <ReportItem {...item} />
        </li>
      )
    })

    return renderedItems
  }

  render() {
    return (
      <div className='Home'>
        {/* <Jumbotron>
          <p>Welcome to Streamline Analytica</p>
        </Jumbotron> */}
        <div className='recap'>
          <p>Yesterday's Recap</p>
          <div>
            <div className='lines'>
              <p>Lines</p>
              <ul>

              </ul>
            </div>
            <div className='machines'>
              <p>Machines</p>
              <ul>

              </ul>
            </div>
            <div className='reports'>
              <p>Top downtime reports</p>
              <ul>

              </ul>
            </div>
          </div>
        </div>
        <div className='recap'>
          <p>Past Two Weeks' Recap</p>
          <div>
            <div className='lines'>
              <p>Lines</p>
              <ul>
                {this.renderLines(this.props.weekLines)}
              </ul>
            </div>
            <div className='machines'>
              <p>Machines</p>
              <ul>
                {this.renderMachines(this.props.weekMachines)}
              </ul>
            </div>
            <div className='reports'>
              <p>Top downtime reports</p>
              <ul>
                {this.renderReports(this.props.weekReports)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getYesterday: () => dispatch(fetchYesterday()),
    getWeek: () => dispatch(fetchWeek())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
