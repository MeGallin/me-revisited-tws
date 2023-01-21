import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './ToasterComponent.css';
import { FaCheck, FaExclamation, FaTimes } from 'react-icons/fa';
import 'animate.css';
import { CONTACT_FORM_RESET } from '../../Store/Constants/contactFormConstants';
import {
  USER_LOGIN_RESET,
  USER_REGISTER_RESET,
} from '../../Store/Constants/userConstants';

const ToasterComponent = ({ options }) => {
  const dispatch = useDispatch();
  const handleToasterClose = () => {
    dispatch({ type: CONTACT_FORM_RESET });
    dispatch({ type: USER_REGISTER_RESET });
    dispatch({ type: USER_LOGIN_RESET });
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      dispatch({ type: CONTACT_FORM_RESET });
      dispatch({ type: USER_REGISTER_RESET });
      dispatch({ type: USER_LOGIN_RESET });
    }, 6000);
    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <>
      {options?.success || options.error ? (
        <div
          className={`toaster animate__animated animate__bounceInLeft ${
            options?.success ? 'success' : null
          } || ${options?.error ? 'error' : null} `}
        >
          <div className="toaster_content">
            {options?.success ? (
              <>
                <FaCheck size={28} />
                <h1>Success</h1>
                <p>{options?.success}</p>
              </>
            ) : null}
            {options?.error ? (
              <>
                <FaExclamation size={28} />
                <h1>Error</h1>
                <p>{options?.error}</p>
              </>
            ) : null}
          </div>

          <FaTimes
            size={28}
            className="toaster_times"
            onClick={handleToasterClose}
          />
        </div>
      ) : null}
    </>
  );
};

export default ToasterComponent;
