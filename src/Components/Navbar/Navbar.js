import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleTab } from '../TabNavigator/TabNavigator.operations'
import AccountModal from '../AccountModal/AccountModal'
import icon from '../../Images/streamline-logo.png'
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.handleLogoClick = this.handleLogoClick.bind(this)
  }

  handleLogoClick() {
    this.props.switchTab(0)
    this.props.history.push('/')
  }

  handleAccountClick() {

  }

  render() {
    return (
      <div className='Navbar'>
        <img src={icon} onClick={this.handleLogoClick}/>
        <AccountModal />
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
    switchTab: (tab) => dispatch(handleTab(tab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
