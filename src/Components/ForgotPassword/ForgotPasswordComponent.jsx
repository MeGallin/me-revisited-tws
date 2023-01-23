import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emailRegEx } from '../../Utils/regEx';

import { userForgotPasswordAction } from '../../Store/Actions/userActions';

import InputComponent from '../Input/InputComponent';
import ButtonComponent from '../Button/ButtonComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';

const ForgotPasswordComponent = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPWSubmit = (e) => {
    e.preventDefault();
    //Dispatch action
    dispatch(userForgotPasswordAction(email));
    setEmail('');
  };

  const userForgotPassword = useSelector((state) => state.userForgotPassword);
  const { loading, error, success } = userForgotPassword;

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Forgot Password Form</legend>
          <ToasterComponent options={{ error, success }} />

          <div>
            <p>
              Simply send us your email address and we will send you an email
              with a reset link.
            </p>
            <form onSubmit={handleForgotPWSubmit}>
              <InputComponent
                label="EMAIL"
                value={email}
                type="email"
                name="email"
                required
                className={!emailRegEx.test(email) ? 'invalid' : 'entered'}
                error={
                  !emailRegEx.test(email) && email.length !== 0
                    ? `Invalid email address.`
                    : null
                }
                onChange={handleOnChange}
              />

              <ButtonComponent
                type="submit"
                text={
                  !emailRegEx.test(email) ? 'Disabled' : 'send email address'
                }
                variant="info"
                disabled={!emailRegEx.test(email)}
              />
            </form>
          </div>
        </fieldset>
      )}
    </>
  );
};

export default ForgotPasswordComponent;
