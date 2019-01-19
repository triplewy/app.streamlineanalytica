import React, { Component } from 'react';
import { connect } from 'react-redux'
import { workOrders, onFinishPress } from './WorkOrders.operations'
import { Link } from 'react-router-dom'
import { timePassed } from '../Utilities/ParseTime'
import Loader from 'react-loader-spinner'
import ImagesList from '../ImagesList/ImagesList'
import './WorkOrders.css';

class WorkOrders extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.renderItems = this.renderItems.bind(this)
  }

  componentDidMount() {
    this.props.getWorkOrders()
  }

  renderItems() {
    return this.props.workOrders.map((item, index) => {
      return (
        <li key={index}>
          <div>
            <p className='line'>{`LINE ${item.line}`}</p>
            <p className='machine'>{item.machine}</p>
            <p>{`${item.stars}/5 Stars`}</p>
            <p>{`Description: ${item.description}`}</p>
            <ImagesList images={item.images} />
          </div>
          <div>
            <p>{`Submitted ${timePassed(new Date(item.createdDate).getTime())}`}</p>
            {item.finishedDate ?
              <p>{`Finished ${timePassed(new Date(item.finishedDate).getTime())}`}</p>
              :
              <button onClick={() => this.props.handleFinish(index, item.workOrderId)}>Finish</button>
            }
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div className='WorkOrders'>
        <p>Work Orders</p>
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
    ...state.workOrders
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getWorkOrders: () => dispatch(workOrders()),
    handleFinish: (index, workOrderId) => dispatch(onFinishPress(index, workOrderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkOrders);
