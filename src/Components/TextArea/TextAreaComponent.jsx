import PropTypes from 'prop-types';
import './TextAreaComponent.css';

const TextAreaComponent = ({
  id,
  name,
  value,
  placeholder,
  onChange,
  label,
  error,
  className,
}) => {
  return (
    <>
      {label && <label htmlFor="input-field">{label}</label>}
      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
      {error && <p className="validation-error">{error}</p>}
    </>
  );
};

TextAreaComponent.defaultProps = {
  type: PropTypes.string,
};

TextAreaComponent.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextAreaComponent;
