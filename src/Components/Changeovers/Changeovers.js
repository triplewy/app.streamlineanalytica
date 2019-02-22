import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetChangeovers, handleSelectChangeover } from './Changeovers.operations'
import { Link, withRouter } from 'react-router-dom'
import { timePassed } from '../Utilities/ParseTime'
import Loader from 'react-loader-spinner'
import './Changeovers.css';

class Changeovers extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.renderItems = this.renderItems.bind(this)
    this.itemClick = this.itemClick.bind(this)
  }

  componentDidMount() {
    this.props.getChangeovers()
  }

  renderItems() {
    return this.props.changeovers.map((item, index) => {
      return (
        <li key={index} onClick={() => this.itemClick(item)}>
          <p className='line'>{`LINE ${item.line}`}</p>
          <p className='title'>{item.title}</p>
        </li>
      )
    })
  }

  itemClick(item) {
    this.props.selectChangeover(item).then(() => {
      this.props.history.push({ pathname: '/changeovers/edit', state: { fromChangeovers: true }})
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className='Changeovers'>
        <p>Changeovers</p>
        <Link to='/changeovers/add'>Add Changeover</Link>
        {this.props.loading ?
          <Loader
            type="Puff"
            color="#FF8300"
            height="50"
            width="50"
          />
          :
          <ul>
            {this.renderItems()}
          </ul>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.changeovers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getChangeovers: () => dispatch(handleGetChangeovers()),
    selectChangeover: (changeover) => dispatch(handleSelectChangeover(changeover))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Changeovers));
