import { useEffect, useState } from 'react';
import './TellMeComponent.css';
import PropTypes from 'prop-types';

const TellMeComponent = ({ text }) => {
  const [randomVal, setRandomVal] = useState('');

  useEffect(() => {
    let ignore = false;
    setRandomVal(Number(Math.floor(Math.random() * 10) + 1));
    if (!ignore) return () => (ignore = true);
  }, []);

  return (
    <div className="call_me">
      <h1>
        {text[0]?.length > 0 ? (
          <span className={`char${randomVal - 1}`}>{text[0]}</span>
        ) : null}
        {text[1]?.length > 0 ? (
          <span className={`char${randomVal}`}>{text[1]}</span>
        ) : null}
        {text[2]?.length > 0 ? (
          <span className={`char${randomVal + 1}`}>{text[2]}</span>
        ) : null}
        {text[3]?.length > 0 ? (
          <span className={`char${randomVal - 1}`}>{text[3]}</span>
        ) : null}
        {text[4]?.length > 0 ? (
          <span className={`char${randomVal}`}>{text[4]}</span>
        ) : null}
        {text[5]?.length > 0 ? (
          <span className={`char${randomVal + 1}`}>{text[5]}</span>
        ) : null}
        {text[6]?.length > 0 ? (
          <span className={`char${randomVal - 1}`}>{text[6]}</span>
        ) : null}
        {text[7]?.length > 0 ? (
          <span className={`char${randomVal}`}>{text[7]}</span>
        ) : null}
        {text[8]?.length > 0 ? (
          <span className={`char${randomVal + 1}`}>{text[8]}</span>
        ) : null}
        {text[9]?.length > 0 ? (
          <span className={`char${randomVal - 1}`}>{text[9]}</span>
        ) : null}
        {text[10]?.length > 0 ? (
          <span className={`char${randomVal}`}>{text[10]}</span>
        ) : null}
      </h1>
    </div>
  );
};
TellMeComponent.propTypes = {
  text: PropTypes.array,
};

export default TellMeComponent;
