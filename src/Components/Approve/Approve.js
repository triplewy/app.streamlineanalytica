import React, { Component } from 'react';
import { handleApprove } from './Approve.operations'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import Loader from 'react-loader-spinner'
import './Approve.css';

class Approve extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.renderReponse = this.renderReponse.bind(this)
  }

  componentDidMount() {
    this.props.approve(queryString.parse(this.props.location.state.id).id)
  }

  renderReponse() {
    if (this.props.success) {
      return (
        <div>
          <p>Work order approved</p>
          <button>Continue to work orders</button>
        </div>
      )
    } else {
      return (
        <div>
          <p>Work order failed to approve</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='Approve'>
        {this.props.loading ?
          <Loader
            type="Puff"
            color="#FF8300"
            height="50"
            width="50"
          />
          :
          this.renderReponse()
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.approve
  }
}

function mapDispatchToProps(dispatch) {
  return {
    approve: (hash) => dispatch(handleApprove(hash))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Approve);
