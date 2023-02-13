import { useEffect, useState } from 'react';
import moment from 'moment';
import SpinnerComponent from '../Spinner/SpinnerComponent';

const DateTimeComponent = () => {
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(moment().format('MMMM Do YYYY, h:mm a'));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {dateTime ? (
        <>{dateTime}</>
      ) : (
        <div>
          <SpinnerComponent />
        </div>
      )}
    </>
  );
};

export default DateTimeComponent;
