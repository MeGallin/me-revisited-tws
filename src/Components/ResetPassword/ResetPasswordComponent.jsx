import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { passwordRegEx } from '../../Utils/regEx';

import { userResetPasswordAction } from '../../Store/Actions/userActions';

import InputComponent from '../Input/InputComponent';
import ButtonComponent from '../Button/ButtonComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';

const ResetPasswordComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [password, setPassword] = useState('');

  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordResetSubmit = (e) => {
    e.preventDefault();
    //Dispatch action

    dispatch(
      userResetPasswordAction({
        password: password,
        resetPasswordToken: params.token,
      }),
    );
    setPassword('');
    setTimeout(() => {
      navigate('/forms');
    }, 6000);
  };

  const userResetPassword = useSelector((state) => state.userResetPassword);
  const { loading, error, success } = userResetPassword;

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Reset Password</legend>
          <ToasterComponent options={{ error, success }} />

          <div>
            <form onSubmit={handlePasswordResetSubmit}>
              <InputComponent
                label="New Password"
                type="password"
                name="password"
                value={password}
                required
                className={
                  !passwordRegEx.test(password) ? 'invalid' : 'entered'
                }
                error={
                  !passwordRegEx.test(password) && password.length !== 0
                    ? `Password must contain at least l Capital letter, 1 number and 1 special character.`
                    : null
                }
                onChange={handleOnChange}
              />

              <ButtonComponent
                type="submit"
                text={
                  !passwordRegEx.test(password)
                    ? 'disabled'
                    : 'send email address'
                }
                variant={!passwordRegEx.test(password) ? 'dark' : 'success'}
                disabled={!passwordRegEx.test(password)}
              />
            </form>
          </div>
        </fieldset>
      )}
    </>
  );
};

export default ResetPasswordComponent;
