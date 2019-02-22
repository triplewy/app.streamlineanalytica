import React, { Component } from 'react';
import { handleCreateChangeover } from './AddChangeover.operations'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './AddChangeover.css';

class AddChangeover extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lineId: this.props.lines[0].lineId,
      title: ''
    }

    this.renderOptions = this.renderOptions.bind(this)
  }

  componentDidMount() {
  }

  renderOptions() {
    return this.props.lines.map((item, index) => {
      return (
        <option value={item.lineId} key={index}>{item.name}</option>
      )
    })
  }

  render() {
    return (
      <div className='AddChangeover'>
        <p>Add Changeover</p>
        <div className='info'>
          <div>
            <p>Line: </p>
            <select onChange={(e) => this.setState({ lineId: e.target.value })}>
              {this.renderOptions()}
            </select>
          </div>
          <div>
            <p>Title: </p>
            <input className='titleInput' placeholder="Enter title here..." value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })}/>
          </div>
        </div>
        {this.props.created ?
          <div>
            <ul>

            </ul>
            <div className='addStep'>
              <button>Add image</button>
              <textarea placeholder="Description" rows="4"/>
              <button>Confirm</button>
            </div>
          </div>
          :
          <button disabled={!this.state.title} onClick={() => this.props.handleCreate(this.state.lineId, this.state.title)}>Create</button>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.app,
    ...state.addChangeover
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleCreate: (lineId, title) => dispatch(handleCreateChangeover(lineId, title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChangeover);
