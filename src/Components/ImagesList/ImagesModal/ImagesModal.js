import React from 'react';
import { Modal, Carousel } from 'react-bootstrap'
import './ImagesModal.css'

export default class ImagesModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };

    console.log(props);
    this.renderCarousel = this.renderCarousel.bind(this)
  }

  renderCarousel() {
    if (this.props.images) {
      return this.props.images.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img src={item.url} />
          </Carousel.Item>
        )
      })
    }

  }

  render() {

    return (
      <Modal show={this.props.showModal} onHide={this.props.toggleModal} id='ImagesModal'>
        {/* <Modal.Header closeButton>
          <Modal.Title>{`${this.props.line}`}</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className='ImagesModal'>
          <Carousel>
            {this.renderCarousel()}
          </Carousel>
        </Modal.Body>
      </Modal>
    )
  }
}
