import { useEffect, useState } from 'react';

import moment from 'moment';
import SpinnerComponent from '../Spinner/SpinnerComponent';

const DateTimeComponent = () => {
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    let ignore = false;
    setInterval(() => {
      setDateTime(moment().format('MMMM Do YYYY, h:mm a'));
    }, 1000);
    if (!ignore) return () => (ignore = true);
  }, [dateTime]);

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
