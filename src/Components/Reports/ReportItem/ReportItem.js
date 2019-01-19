import React from 'react';
import { downtimeString } from '../../Utilities/DowntimeString'
import ImagesList from '../../ImagesList/ImagesList'
import './ReportItem.css'

export default class ReportItem extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const options = {timeZone: 'UTC', weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'}
    const date = new Date(this.props.reportedDate).toLocaleDateString('en-US', options)
    const downtime = downtimeString(this.props.downtime)

    return (
      <div className='ReportItem'>
        <div>
          <div>
            <div>
              <p className='line'>{`LINE ${this.props.name}`}</p>
              <p className='lineLeader'>{this.props.lineLeaderName}</p>
            </div>
          </div>
          <div>
            <img className='icon' src={this.props.icon_url} />
            <p>{this.props.machineName}</p>
          </div>
          <div>
            <div>
              <p className='date'>{date}</p>
              <p className='downtime'>{downtime}</p>
            </div>
          </div>
        </div>
        <div className='descriptionWrapper'>
          <p>{this.props.description}</p>
          <ImagesList images={this.props.images} />
        </div>
      </div>
    )
  }
}
