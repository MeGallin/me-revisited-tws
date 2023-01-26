import PropTypes from 'prop-types';
import './IconsComponent.css';

const IconsComponent = ({ options }) => {
  return (
    <div className="icons_wrapper">
      {options.map((img) => (
        <span key={img.name}>
          <img
            className="icon"
            src={img.path}
            alt={img.name}
            title={img.name}
          />
        </span>
      ))}
    </div>
  );
};

IconsComponent.propTypes = {
  options: PropTypes.array,
};

export default IconsComponent;
