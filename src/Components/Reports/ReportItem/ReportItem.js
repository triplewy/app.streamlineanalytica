import React from 'react';
import { downtimeString } from '../../Utilities/DowntimeString'
import ImagesModal from './ImagesModal/ImagesModal'
import './ReportItem.css'

export default class ReportItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.renderImages = this.renderImages.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  renderImages() {
    if (this.props.images) {
      return this.props.images.map((item, index) => {
        return (
          <li key={index}>
            <img src={item.url} />
          </li>
        )
      })
    }
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal})
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
          <ul className='images' onClick={this.toggleModal}>
            {this.renderImages()}
          </ul>
        </div>
        <ImagesModal {...this.state} toggleModal={this.toggleModal} {...this.props} />
      </div>
    )
  }
}
