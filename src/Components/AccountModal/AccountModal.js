import React, { Component } from 'react';
import { fetchAccount, fetchLogout } from './AccountModal.operations'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import './AccountModal.css';

class AccountModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

  render() {
    return (
      <div className='AccountModal'>
        <div onClick={() => this.setState({showModal: !this.state.showModal})}>
          Account
        </div>
        <Modal show={this.state.showModal} onHide={() => this.setState({showModal: !this.state.showModal})}>
          <Modal.Header closeButton>
            <Modal.Title>Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='accountModalBody'>
              <div className='logout' onClick={this.props.logout}>Logout</div>
              <Link to='/workorders' onClick={() => this.setState({ showModal: !this.state.showModal })}>Work Orders</Link>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAccount: () => dispatch(fetchAccount()),
    logout: () => dispatch(fetchLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountModal);
