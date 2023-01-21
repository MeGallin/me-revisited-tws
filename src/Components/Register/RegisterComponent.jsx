import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerAction } from '../../Store/Actions/userActions';

import ButtonComponent from '../Button/ButtonComponent';
import InputComponent from '../Input/InputComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';

import { nameRegEx, emailRegEx, passwordRegEx } from '../../Utils/regEx';

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    dispatch(registerAction(formData));
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleOnchange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const userRegistration = useSelector((state) => state.userRegistration);
  const { loading, error, success } = userRegistration;

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Registration</legend>
          <ToasterComponent options={{ error, success }} />

          <form onSubmit={handleRegistrationSubmit}>
            <InputComponent
              label="Name"
              value={name}
              type="text"
              name="name"
              required
              className={!nameRegEx.test(name) ? 'invalid' : 'entered'}
              error={
                !nameRegEx.test(name) && name.length !== 0
                  ? `Name field must contain a first name and surname.`
                  : null
              }
              onChange={handleOnchange}
            />

            <InputComponent
              label="Email"
              type="email"
              name="email"
              value={email}
              className={!emailRegEx.test(email) ? 'invalid' : 'entered'}
              error={
                !emailRegEx.test(email) && email.length !== 0
                  ? `Invalid email address.`
                  : null
              }
              onChange={handleOnchange}
            />

            <InputComponent
              label="Password"
              type="password"
              name="password"
              value={password}
              required
              className={!passwordRegEx.test(password) ? 'invalid' : 'entered'}
              error={
                !passwordRegEx.test(password) && password.length !== 0
                  ? `Password must contain at least l Capital letter, 1 number and 1 special character.`
                  : null
              }
              onChange={handleOnchange}
            />

            <div>
              <ButtonComponent
                type="submit"
                text={
                  !emailRegEx.test(email) ||
                  !nameRegEx.test(name) ||
                  password.length <= 5
                    ? 'Disabled'
                    : 'Register'
                }
                variant={
                  !emailRegEx.test(email) ||
                  !nameRegEx.test(name) ||
                  !passwordRegEx.test(password)
                    ? 'dark'
                    : 'success'
                }
                disabled={
                  !emailRegEx.test(email) ||
                  !nameRegEx.test(name) ||
                  !passwordRegEx.test(password)
                }
              />
            </div>
          </form>
        </fieldset>
      )}
    </>
  );
};

export default RegisterComponent;
