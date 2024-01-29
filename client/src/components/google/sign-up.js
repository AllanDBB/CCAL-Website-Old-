// client/src/components/GoogleLoginButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const SignUpGoogle = ({ onLoginSuccess, onLoginFailure }) => {
  const clientId = '646802092351-7du98jppnvaupgontu7qcc70t07jqe97.apps.googleusercontent.com';

  const responseGoogle = (response) => {
    if (response.error === 'popup_closed_by_user') {
        const userProfile = response.profileObj;
        console.log('El usuario cerró la ventana emergente de inicio de sesión.', userProfile);
        // Puedes mostrar un mensaje al usuario o realizar otras acciones según tus necesidades.
      }
    else if (response && response.profileObj) {
      onLoginSuccess(response.profileObj);
    } else {
      onLoginFailure(response);
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