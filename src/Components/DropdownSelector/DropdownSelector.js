import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import './DropdownSelector.css';

class DropdownSelector extends Component {

  renderItems() {
    var renderedItems = [];
    if (this.props.items.length > 0) {
      renderedItems = this.props.items.map((item, index) => {
        return (
          <li
            className={index === this.props.index ? 'selected' : 'unselected'}
            key={index}
            onClick={() => this.props.setIndex(index)} disabled={index === this.props.index}
          >
            <p>{item.name}</p>
          </li>
        )
      })
    }
    return renderedItems
  }

  render() {
    return (
      <div className='DropdownSelector'>
        <p className='dropdownLabel'>{`${this.props.label}:`}</p>
        <Dropdown id='DropdownSelector'>
          <Dropdown.Toggle>
            {this.props.items[this.props.index].name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {this.renderItems()}
          </Dropdown.Menu>
        </Dropdown>
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

export default connect(mapStateToProps, mapDispatchToProps)(DropdownSelector);
