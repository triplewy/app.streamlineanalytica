import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { fetchSessionLogin } from './App.operations'
import Login from '../Components/Login/Login'
import Home from '../Components/Home/Home'
import Navbar from '../Components/Navbar/Navbar'
import TabNavigator from '../Components/TabNavigator/TabNavigator'
import Reports from '../Components/Reports/Reports'
import Stats from '../Components/Stats/Stats'
import Splash from '../Components/Splash/Splash'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.sessionLogin()
  }

  render() {
    const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (this.props.loggedIn && this.props.lines.length > 0 ? <Component {...props}/> : <Redirect to={{pathname: '/', state: {from: props.location}}} /> )} />
    )
    return (
      <BrowserRouter>
        <div>
          {this.props.loggedIn ?
            <div>
              <Navbar />
              <TabNavigator />
            </div>
            :
            null
          }
          <Switch>
            <Route exact path='/' component={this.props.loggedIn ? (this.props.lines.length > 0 ? Home : Splash) : Login} />
            <PrivateRoute exact path='/reports' component={Reports} />
            <PrivateRoute exact path='/stats' component={Stats} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.app.loggedIn,
    lines: state.app.lines,
    machines: state.app.machines
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sessionLogin: () => dispatch(fetchSessionLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
