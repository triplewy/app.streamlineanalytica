import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './ChangeoverStep.css';

class ChangeoverStep extends PureComponent {

  render() {
    return (
      <li key={this.props.index}>
        <p>{this.props.step}</p>
        <p>{this.props.description}</p>
      </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeoverStep);
