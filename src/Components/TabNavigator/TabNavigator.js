import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleTab } from './TabNavigator.operations'
import './TabNavigator.css';

class TabNavigator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tabs: this.props.lines.length > 0 ? [{name: 'Home', link: '/'}, {name: 'Reports', link: '/reports'}, {name: 'Stats', link: '/stats'}] : [{name: 'Home', link: '/'}]
    }
  }

  renderItems() {
    var renderedItems = [];
    if (this.state.tabs.length > 0) {
      renderedItems = this.state.tabs.map((item, index) => {
        return (
          <Link key={index} to={`${item.link}`} className={this.props.tab === index ? 'selected' : 'unselected'} onClick={() => this.props.switchTab(index)}>
            {item.name}
          </Link>
        )
      })
    }
    return renderedItems
  }

  render() {
    return (
      <div className='TabNavigator'>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tab: state.tabNavigator.tab,
    lines: state.app.lines
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchTab: (tab) => dispatch(handleTab(tab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigator);
