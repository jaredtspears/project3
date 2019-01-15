import React, { Component } from 'react';
import './card.css';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
// import LoggedInNavTabs from '../../MainPgComponents/NavTabs/loggedInRendering'
// import { instanceOf } from 'prop-types';
// import { withCookies, Cookies } from 'react-cookie';

const logout = () => {
  console.log('logout') // eslint-disable-line
  sessionStorage.clear();
}

class Card extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const responseGoogle = (response) => {
      console.log(response);
    }

  return (
    <div>
      <div className="card border-success mb-3 text-center">
        <div className="card-header bg-transparent border-success"><h1>Trophy Case</h1></div>
          <div className="card-body text-success">
            <h5 className="card-title">Who We Are:</h5>
              <p className="card-text"> Our Telos is to compile user collections! 
                We want your hobbies and pastimes to be conveniently accessible for 
                you. That said, we pride ourselves in providing top-tier data storage 
                and an inviting user experience that will display your "Trophy Case" of collections
                in all their glory!
              </p>
          </div>
            <div className="card-footer">
        
        <GoogleLogin
                className="btn"    
                clientId="954580373008-teabf1ael8s16gqpriuf257i298gr2fv.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}

                // this should be called after the login is confirmed (this might need to be passed as a prop again)
                onClick= {this.props.toggleLoggedIn}
                //this should be handling the Cookies in App.js
                onChange={this.handleNameChange.bind(this)}
                uxMode="redirect"
                redirectUri="https://tc-trophy-case.herokuapp.com/profile"
                />
            <GoogleLogout
                className="btn"
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout>
  
   </div>
  </div>
  {/* {this.loggedInRendering()} */}

</div>
  );
}
}
export default Card;
