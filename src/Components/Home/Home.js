import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className='Home'>
        <Jumbotron>
          <p>Welcome to Streamline Analytica</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
