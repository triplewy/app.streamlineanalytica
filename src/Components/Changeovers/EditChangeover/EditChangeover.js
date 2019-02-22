import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetChangeoverSteps } from './EditChangeover.operations'
import { Link, withRouter } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import ChangeoverStep from '../ChangeoverStep/ChangeoverStep'
import AddChangeoverStep from '../AddChangeoverStep/AddChangeoverStep'
import '../AddChangeover/AddChangeover.css';

class EditChangeover extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.renderSteps = this.renderSteps.bind(this)
  }

  componentDidMount() {
    if (this.props.selectedChangeover) {
      this.props.getChangeoverSteps(this.props.selectedChangeover.changeoverId)
    } else {
      this.props.history.push('/changeovers')
    }
  }

  renderSteps() {
    return this.props.steps.map((item, index) => {
      return (
        <ChangeoverStep {...item} index={index} />
      )
    })
  }


  render() {
    return (
      <div className='AddChangeover'>
        <p>Edit Changeover</p>
        <div className='info'>
          <div>
            <p>{`LINE ${this.props.selectedChangeover ? this.props.selectedChangeover.line : ''}`}</p>
          </div>
          <div>
            <p>{`Title: ${this.props.selectedChangeover ? this.props.selectedChangeover.title : ''}`}</p>
          </div>
        </div>
        <div>
          <ul>
            {this.renderSteps()}
          </ul>
          <AddChangeoverStep />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.app,
    ...state.editChangeovers,
    selectedChangeover: state.changeovers.selectedChangeover
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getChangeoverSteps: (changeoverId) => dispatch(handleGetChangeoverSteps(changeoverId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditChangeover));
