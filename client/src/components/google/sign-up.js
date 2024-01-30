import React from 'react';
import SignUp from '../../pages/sign_up/signUp';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Google = ({ onSuccess, onError }) => {
    return (
        <div>
                <GoogleOAuthProvider clientId="646802092351-7du98jppnvaupgontu7qcc70t07jqe97.apps.googleusercontent.com">
                    <SignUp onSuccess={onSuccess} onError={onError} />  
                </GoogleOAuthProvider>
        </div>

    );
};

export default Google;