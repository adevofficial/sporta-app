import React, { Component } from "react";
import FacebookProvider, { Login as FBLogin } from 'react-facebook';
import { Button } from "reactstrap";

import SocialLogin from 'react-social-login'
import config from "./../config/config.json";


const GoogleButton = ({ children, triggerLogin, ...props }) => (
    <Button onClick={triggerLogin} className="btn-google-plus" block {...props} >
        {children}
    </Button>
);

const GoogleLogin = SocialLogin(GoogleButton);

const FacebookButton = ({ children, triggerLogin, ...props }) => (
    <Button onClick={triggerLogin} className="btn-facebook" block {...props} >
        {children}
    </Button>
);

const FacebootLogin = SocialLogin(FacebookButton);

// export class FBLoginButton extends Component {

//     handleResponse = (data) => {
//         console.log(data);
//     }

//     handleError = (error) => {
//         this.setState({ error });
//     }

//     render() {
//         return (
//             <FacebookProvider appId={config.FBAppID}>
//                 <FBLogin
//                     scope="email"
//                     onResponse={this.handleResponse}
//                     onError={this.handleError}
//                     render={({ isLoading, isWorking, onClick }) => (
//                         <Button onClick={onClick} className="btn-facebook" block><span>facebook</span>
//                             {(isLoading || isWorking) && (<span>Loading...</span>)}
//                         </Button>
//                     )}
//                 />
//             </FacebookProvider>
//         );
//     }
// }

export class GoogleLoginButton extends Component {

    handleResponse = (data) => {
        console.log(data);
    }

    handleError = (error) => {
        this.setState({ error });
    }

    render() {
        return (
            <GoogleLogin
                provider='google'
                appId={config.GoogleAppID}
                onLoginSuccess={this.handleResponse}
                onLoginFailure={this.handleError}
            ><span>Google</span></GoogleLogin>
        );
    }
}

export class FacebookLoginButton extends Component {

    handleResponse = (data) => {
        console.log(data);
    }

    handleError = (error) => {
        this.setState({ error });
    }

    render() {
        return (
            <FacebootLogin
                provider='facebook'
                appId={config.FacebookAppID}
                onLoginSuccess={this.handleResponse}
                onLoginFailure={this.handleError}
            > <span>Facebook</span></FacebootLogin>
        );
    }
}