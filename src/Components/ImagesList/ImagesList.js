import React from 'react';
import ImagesModal from './ImagesModal/ImagesModal'
import './ImagesList.css'

export default class ImagesList extends React.PureComponent {
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
    return (
      <div>
        <ul className='images' onClick={this.toggleModal}>
          {this.renderImages()}
        </ul>
        <ImagesModal {...this.state} toggleModal={this.toggleModal} {...this.props} />
      </div>
    )
  }
}
