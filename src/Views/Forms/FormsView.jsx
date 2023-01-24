import ButtonComponent from '../../Components/Button/ButtonComponent';
import ForgotPasswordComponent from '../../Components/ForgotPassword/ForgotPasswordComponent';
import LoginComponent from '../../Components/Login/LoginComponent';
import RegisterComponent from '../../Components/Register/RegisterComponent';
import useToggle from '../../Utils/useToggle';

const FormsView = () => {
  //Created a custom useToggle hook
  const [showRegisterForm, setShowRegisterForm] = useToggle(false);
  const [showForgotPw, setShowForgotPw] = useToggle(false);
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
            onClick={setShowRegisterForm}
          />
        )}
        <ButtonComponent
          type="button"
          text={showForgotPw ? 'Back to login' : ' Forgot Password'}
          variant="dark"
          disabled={false}
          onClick={setShowForgotPw}
        />
      </div>
    </div>
  );
};

export default FormsView;
