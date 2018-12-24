import React, { Component } from 'react';
import { connect } from 'react-redux'
import DropdownSelector from './DropdownSelector'
import DateSelector from './DateSelector'
import './DropdownSelectorList.css';

class DropdownSelectorList extends Component {

  renderItems() {
    var renderedItems = [];
    if (this.props.items.length > 0) {
      renderedItems = this.props.items.map((item, index) => {
        if (item.isDate) {
          return (
            <DateSelector label={item.label} key={index} />
          )
        } else {
          return (
            <DropdownSelector label={item.label} items={item.items} index={item.index} setIndex={item.setIndex} key={index}/>
          )
        }
      })
    }
    return renderedItems
  }

  render() {
    return (
      <div className='DropdownSelectorList'>
        {this.renderItems()}
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

export default connect(mapStateToProps, mapDispatchToProps)(DropdownSelectorList);
