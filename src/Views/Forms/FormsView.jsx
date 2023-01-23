import { useState } from 'react';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import ForgotPasswordComponent from '../../Components/ForgotPassword/ForgotPasswordComponent';
import LoginComponent from '../../Components/Login/LoginComponent';
import RegisterComponent from '../../Components/Register/RegisterComponent';

const FormsView = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showForgotPw, setShowForgotPw] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      {showForgotPw ? (
        <ForgotPasswordComponent />
      ) : showRegisterForm ? (
        <RegisterComponent />
      ) : (
        <LoginComponent />
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {showForgotPw ? null : (
          <ButtonComponent
            type="button"
            text={showRegisterForm ? 'Login?' : 'Register?'}
            variant="dark"
            disabled={false}
            onClick={() => setShowRegisterForm((prev) => (prev = !prev))}
          />
        )}
        <ButtonComponent
          type="button"
          text={showForgotPw ? 'Back to login' : ' Forgot Password'}
          variant="dark"
          disabled={false}
          onClick={() => setShowForgotPw((prev) => (prev = !prev))}
        />
      </div>
    </div>
  );
};

export default FormsView;
