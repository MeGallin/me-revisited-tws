import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nameRegEx, emailRegEx } from '../../Utils/regEx';
import ButtonComponent from '../Button/ButtonComponent';
import InputComponent from '../Input/InputComponent';
import TellMeComponent from '../TellMe/TellMeComponent';
import TextAreaComponent from '../TextArea/TextAreaComponent';

import { contactFormAction } from '../../Store/Actions/contactFormActions';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';

const ContactComponent = () => {
  const dispatch = useDispatch();
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
    dispatch(contactFormAction(formData));
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const contactForm = useSelector((state) => state.contactForm);
  const { loading, error, success } = contactForm;

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>
            <TellMeComponent text={['Get', ' in', ' touch']} />
          </legend>
          <div>
            <ToasterComponent options={{ error, success }} />

            <p>
              If you have any questions or queries, please fill out the form
              below.
            </p>

            <form onSubmit={handleSubmitContactForm}>
              <InputComponent
                id="name"
                label="name"
                value={name}
                type="text"
                name="name"
                required
                className={!nameRegEx.test(name) ? 'invalid' : 'entered'}
                error={
                  !nameRegEx.test(name) && name.length !== 0
                    ? `You need to provide a name and surname`
                    : null
                }
                onChange={handleOnChange}
              />
              <InputComponent
                id="email"
                label="email"
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
                label="How can I help you?"
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
                    : 'Submit your enquiry'
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
      )}
      <fieldset className="fieldSet">
        <legend>
          <TellMeComponent text={['My', ' location']} />
        </legend>
        <div>
          <p>
            I reside in Guildford, Surrey. I possess a valid driver's license
            and am willing to travel.
          </p>
        </div>
      </fieldset>
    </>
  );
};

export default ContactComponent;
