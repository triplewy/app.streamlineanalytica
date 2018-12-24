import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchReports, fetchUpdateReports, setPage, setDate, setLine, setMachine } from './Reports.operations'
import DropdownSelectorList from '../DropdownSelector/DropdownSelectorList'
import ReportItem from './ReportItem/ReportItem'
import InfiniteScroll from 'react-infinite-scroller';
import Loader from 'react-loader-spinner'
import './Reports.css';

class Reports extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    var machines = [{name: 'ALL MACHINES'}].concat(this.props.machines[this.props.lines[this.props.lineIndex].lineId])
    this.props.getReports(this.props.lines[this.props.lineIndex].lineId, machines[this.props.machineIndex], this.props.date)
  }

  componentDidUpdate(prevProps) {
    if (this.props.lineIndex !== prevProps.lineIndex || this.props.machineIndex !== prevProps.machineIndex || this.props.date !== prevProps.date) {
      this.props.updatePage(0).then(() => {
        const machines = [{name: 'ALL MACHINES'}].concat(this.props.machines[this.props.lines[this.props.lineIndex].lineId])
        this.props.getReports(this.props.lines[this.props.lineIndex].lineId, machines[this.props.machineIndex], this.props.date)
      })
    }
  }

  updatePage() {
    if (!this.props.finished && !this.props.updating) {
      this.props.updatePage(this.props.page + 1).then(() => {
        const lineId = this.props.lines[this.props.lineIndex].lineId
        const machines = [{name: 'ALL MACHINES'}].concat(this.props.machines[this.props.lines[this.props.lineIndex].lineId])
        this.props.updateReports(lineId, machines[this.props.machineIndex], this.props.date, this.props.page)
      })
    }
  }

  renderItems() {
    var renderedItems = [];
    if (this.props.reports.length > 0) {
      var latestDate = ''
      renderedItems = this.props.reports.map((item, index) => {
        if (item.reportedDate.split('T')[0] !== latestDate) {
          latestDate = item.reportedDate.split('T')[0]
          return (
            <div key={index}>
              <div className='reportsDate'>
                {new Date(item.reportedDate).toLocaleDateString('en-US', {month: 'long', day: 'numeric', weekday: 'long'})}
              </div>
              <ReportItem {...item} />
            </div>
          )
        } else {
          return (
            <div key={index}>
              <ReportItem {...item} />
            </div>
          )
        }
      })
    }
    return renderedItems
  }

  render() {
    return (
      <div className='Reports'>
        <DropdownSelectorList items={[
          {
            label: 'Line',
            items: this.props.lines,
            index: this.props.lineIndex,
            setIndex: this.props.setLineIndex
          },
          {
            label: 'Machine',
            items: [{name: 'ALL MACHINES'}].concat(this.props.machines[this.props.lines[this.props.lineIndex].lineId]),
            index: this.props.machineIndex,
            setIndex: this.props.setMachineIndex
          },
          {
            label: 'Date',
            isDate: true
          }
        ]}
        />
        <div>
          {this.props.refreshing ?
            <Loader
              type="Puff"
              color="#FF8300"
              height="50"
              width="50"
            />
            :
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              threshold={10}
              loadMore={() => this.updatePage()}
              hasMore={!this.props.finished}
              loader={
                <div className='loader' key={-1}>
                  <Loader
                    type="Puff"
                    color="#FF8300"
                    height="50"
                    width="50"
                  />
                </div>
              }
            >
              {this.renderItems()}
            </InfiniteScroll>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lines: state.app.lines,
    machines: state.app.machines,
    lineIndex: state.reports.lineIndex,
    machineIndex: state.reports.machineIndex,
    reports: state.reports.reports,
    page: state.reports.page,
    date: state.reports.date,
    refreshing: state.reports.refreshing,
    updating: state.reports.updating,
    finished: state.reports.finished
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getReports: (lineId, machine, date) => dispatch(fetchReports(lineId, machine, date)),
    updatePage: (page) => dispatch(setPage(page)),
    updateReports: (lineId, machineId, date, page) => dispatch(fetchUpdateReports(lineId, machineId, date, page)),
    setLineIndex: (index) => dispatch(setLine(index)),
    setMachineIndex: (index) => dispatch(setMachine(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
