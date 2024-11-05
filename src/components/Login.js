import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";
import { auth } from '../firebase';
const Login = () => {
    <div id="login0page">
        <div id="login-card">
            <h2>Welcome to Unichat</h2>
            <div className="login-button google"
            onClick={() =>auth.SignInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                <GoogleOutlined />
            </div>
            <br /> <br />
            <div className="login-button facebook"
             onClick={() =>auth.SignInWithRedirect(new firebase.auth.FacebookAuthProvider())}
            >
                <FacebookOutlined/> Sign In with Facebook
            </div>
        </div>
    </div>
}





 
export default ;