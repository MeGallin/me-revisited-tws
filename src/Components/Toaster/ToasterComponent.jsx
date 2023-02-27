import { useEffect, useState } from 'react';

import './ToasterComponent.css';
import { FaCheck, FaExclamation, FaTimes } from 'react-icons/fa';
import 'animate.css';

const ToasterComponent = ({ options }) => {
  const [error, setError] = useState(
    options?.error || options?.googleError || options?.adminDeleteUserError,
  );
  const [success, setSuccess] = useState(
    options?.success || options?.googleSuccess,
  );

  useEffect(() => {
    const interval = setTimeout(() => {
      setError(undefined);
      setSuccess(undefined);
    }, 6000);
    return () => clearInterval(interval);
  }, [options]);

  const handleToasterClose = () => {
    setError(undefined);
    setSuccess(undefined);
  };
  const className = `toaster animate__animated animate__bounceInLeft ${
    success ? 'success' : error ? 'error' : ''
  }`;
  return (
    <>
      {success || error ? (
        <div cy-data="toaster" className={className}>
          <div className="toaster_content">
            {success ? (
              <>
                <FaCheck size={28} />
                <h1>Success</h1>
                <p>{success}</p>
              </>
            ) : null}
            {error ? (
              <>
                <FaExclamation size={28} />
                <h1>Error</h1>
                <p>{error}</p>
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
