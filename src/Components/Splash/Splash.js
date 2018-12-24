import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import './Splash.css';

class Splash extends Component {

  render() {
    return (
      <div className='Splash'>
        <Jumbotron>
          <p>Welcome to Streamline Analytica</p>
          <p>You currently have not been assigned any data</p>
        </Jumbotron>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
