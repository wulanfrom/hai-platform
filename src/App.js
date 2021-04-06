import React, { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

// Pages
import GetStarted from './components/GetStarted/GetStarted';
import MasterUpload from './components/MasterUpload/MasterUpload'
import LoginPage from './components/LoginPage/LoginPage';
import Logout from './components/Logout/Logout'
// import Explore from './components/Explore/Explore'

// redux
import { connect } from 'react-redux'
import * as actions from './redux/actions/index'

function App(props) {
  useEffect(() => {
    props.onTryAutoSignup();
  });

  // the routes that dont need authentification
  let routes = (
    <Router basename="/hai-platform">
    {/* <Route path="/login" component={LoginPage} /> */}
    <Switch>
      <Route path="/login" component={LoginPage} />
      {/* <Redirect to="/login" /> */}
    </Switch>
    </Router>
  );

  if (props.isAuthenticated) {
    // console.log("authenticated");
    routes = (
      <Router basename="/hai-platform">
        {/* <Route path='/getStarted' component={GetStarted}/> */}
        <Switch>
          <Route path="/getStarted" component={GetStarted} /> 
          <Route path="/upload" component={MasterUpload} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/getStarted" />
        </Switch>
      </Router>
    )
  }

  return (
    <div>
        <Navigation />
        { routes }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
