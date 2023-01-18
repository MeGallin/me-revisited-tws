import './TellMeComponent.css';
import PropTypes from 'prop-types';

const TellMeComponent = ({ text }) => {
  const randomVal = Number(Math.floor(Math.random() * 10) + 1);
  return (
    <div className="call_me">
      <h1>
        <span className={`char${randomVal - 1}`}>{text[0]}</span>
        <span className={`char${randomVal}`}>{text[1]}</span>
        <span className={`char${randomVal + 1}`}>{text[2]}</span>
        <span className={`char${randomVal - 1}`}>{text[3]}</span>
        <span className={`char${randomVal}`}>{text[4]}</span>
        <span className={`char${randomVal + 1}`}>{text[5]}</span>
        <span className={`char${randomVal - 1}`}>{text[6]}</span>
        <span className={`char${randomVal}`}>{text[7]}</span>
        <span className={`char${randomVal + 1}`}>{text[8]}</span>
        <span className={`char${randomVal - 1}`}>{text[9]}</span>
        <span className={`char${randomVal}`}>{text[10]}</span>
      </h1>
    </div>
  );
};
TellMeComponent.propTypes = {
  text: PropTypes.string,
};

export default TellMeComponent;
