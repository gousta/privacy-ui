import React, {Component} from 'react';
import './login.css';
import GoogleLogin from 'react-google-login';

import Config from '../../config';
import Authentication from '../../services/authentication';

class Login extends Component {
  onSuccess = (res) => {
    Authentication.success(res)
    this
      .props
      .app
      .login();
  }

  onFailure = (res) => {
    Authentication.failure(res)
  }

  render() {
    return (
      <div className="login">
        <GoogleLogin
          clientId={Config.googleClientId}
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}/>
      </div>
    );
  }
}

export default Login;