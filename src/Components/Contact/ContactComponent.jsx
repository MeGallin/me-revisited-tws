import { useState } from 'react';

import { nameRegEx, emailRegEx } from '../../Utils/regEx';
import ButtonComponent from '../Button/ButtonComponent';
import InputComponent from '../Input/InputComponent';
import TellMeComponent from '../TellMe/TellMeComponent';
import TextAreaComponent from '../TextArea/TextAreaComponent';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formData;

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitContactForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <fieldset className="fieldSet">
        <legend>
          <TellMeComponent text={['Get', ' in', ' touch']} />
        </legend>
        <div>
          <p>
            If you have any questions or queries, please fill out the form
            below.
          </p>

          <form onSubmit={handleSubmitContactForm}>
            <InputComponent
              label="Name"
              value={name}
              type="text"
              name="name"
              required
              className={!nameRegEx.test(name) ? 'invalid' : 'entered'}
              error={
                !nameRegEx.test(name) && name.length !== 0
                  ? `Name must contain at least 5 characters`
                  : null
              }
              onChange={handleOnChange}
            />
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
            <TextAreaComponent
              label="How can T help you?"
              id="message"
              name="message"
              value={message}
              className={message.length <= 8 ? 'invalid' : 'entered'}
              error={
                message.length <= 8 && message?.length !== 0
                  ? `Message must contain at least 8 characters`
                  : null
              }
              onChange={handleOnChange}
            />
            <ButtonComponent
              type="submit"
              text={
                !emailRegEx.test(email) ||
                !nameRegEx.test(name) ||
                message.length <= 8
                  ? 'Disabled'
                  : 'Submit your Enquiry'
              }
              variant={
                !emailRegEx.test(email) ||
                !nameRegEx.test(name) ||
                message.length <= 8
                  ? 'dark'
                  : 'success'
              }
              disabled={
                !emailRegEx.test(email) ||
                !nameRegEx.test(name) ||
                message.length <= 8
              }
            />
          </form>
        </div>
      </fieldset>

      <fieldset className="fieldSet">
        <legend>
          <TellMeComponent text={['Stuff']} />
        </legend>
        <div>
          <p>Other stuff here</p>
        </div>
      </fieldset>
    </>
  );
};

export default ContactComponent;
