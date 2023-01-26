import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './ToasterComponent.css';
import { FaCheck, FaExclamation, FaTimes } from 'react-icons/fa';
import 'animate.css';

const ToasterComponent = ({ options }) => {
  const [error, setError] = useState(options?.error || options.googleError);
  const [success, setSuccess] = useState(
    options?.success || options.googleSuccess,
  );
  const dispatch = useDispatch();

  const handleToasterClose = () => {
    setError(undefined);
    setSuccess(undefined);
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      setError(undefined);
      setSuccess(undefined);
    }, 6000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      {success || error ? (
        <div
          className={`toaster animate__animated animate__bounceInLeft ${
            success ? 'success' : null
          } || ${error ? 'error' : null} `}
        >
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
