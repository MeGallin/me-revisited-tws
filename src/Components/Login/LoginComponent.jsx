import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emailRegEx, passwordRegEx } from '../../Utils/regEx';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import InputComponent from '../Input/InputComponent';
import ButtonComponent from '../Button/ButtonComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import {
  loginAction,
  googleUserLoginAction,
} from '../../Store/Actions/userActions';
import ToasterComponent from '../Toaster/ToasterComponent';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(
    'We are just checking your details. You will be redirected shortly.',
  );

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Dispatch Action
    dispatch(loginAction(formData));
    setFormData({
      email: '',
      password: '',
    });
    setTimeout(() => {
      navigate('/dashboard');
      setRedirect('');
    }, 6000);
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, success } = userLogin;

  //Google auth stuff
  const googleLoginSuccess = async (googleRes) => {
    //Dispatch action that save google info from googleRes.
    dispatch(googleUserLoginAction(googleRes));
    setTimeout(() => {
      navigate('/dashboard');
      setRedirect('');
    }, 6000);
  };
  const googleFailure = (error) => {
    console.log('Error, with google login', error);
  };
  const handleOnchange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const googleUserLogin = useSelector((state) => state.googleUserLogin);
  const {
    loading: googleLoading,
    error: googleError,
    success: googleSuccess,
  } = googleUserLogin;

  //Google auth stuff

  return (
    <>
      {loading || googleLoading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Login</legend>
          <ToasterComponent
            options={{ error, success, googleError, googleSuccess }}
          />
          {success || googleSuccess ? (
            <span>
              {redirect} <SpinnerComponent />
            </span>
          ) : null}
          <form onSubmit={handleLoginSubmit}>
            <InputComponent
              label="Email"
              type="email"
              name="email"
              value={email}
              className={!emailRegEx.test(email) ? 'invalid' : 'entered'}
              onChange={handleOnchange}
            />
            <InputComponent
              label="Password"
              type="password"
              name="password"
              value={password}
              required
              className={!passwordRegEx.test(password) ? 'invalid' : 'entered'}
              onChange={handleOnchange}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ButtonComponent
                type="submit"
                text={
                  !emailRegEx.test(email) || password.length <= 5
                    ? 'Disabled'
                    : 'Login'
                }
                variant="dark"
                disabled={!emailRegEx.test(email) || password.length <= 5}
              />

              <div
                style={{
                  padding: '2px 2px 4px 2px',
                  backgroundColor: 'hsla(0deg, 0%, 45%, 0.1)',
                }}
              >
                <GoogleOAuthProvider
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                >
                  <GoogleLogin
                    onSuccess={googleLoginSuccess}
                    onError={googleFailure}
                  />
                </GoogleOAuthProvider>
              </div>
            </div>
          </form>
        </fieldset>
      )}
    </>
  );
};

export default LoginComponent;
