// client/src/components/GoogleLoginButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const SignUpGoogle = ({ onLoginSuccess, onLoginFailure }) => {
  const clientId = '646802092351-7du98jppnvaupgontu7qcc70t07jqe97.apps.googleusercontent.com';

  const responseGoogle = (response) => {
    if (response && response.profileObj) {
      onLoginSuccess(response.profileObj);
    } else {
      onLoginFailure();
    }
  };

  return (
    <div>
        <GoogleLogin
        clientId={clientId}
        buttonText="Registrarse con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
    </div>
  );
};

export default SignUpGoogle;