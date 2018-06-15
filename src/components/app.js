import React, {Component} from 'react';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';

import './app.css';

import Home from '../components/home/home';
import Login from '../components/login/login';

import Authentication from '../services/authentication';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      app: {
        user: Authentication.getUserData()
      }
    }
  }

  logout() {
    Authentication.destroy()
    this.setState({authenticated: false})
  }

  login() {
    this.setState({
      authenticated: true,
      user: Authentication.getUserData()
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
