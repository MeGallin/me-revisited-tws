import { useId } from 'react';
import './MyWorkCardComponent.css';
import PropTypes from 'prop-types';
import IconsComponent from '../Icons/IconsComponent';

const MyWorkCardComponent = ({ options }) => {
  const id = useId();
  return options.map((option, i) => (
    <div key={`${id}-option-${i}`} className="my_work_card_wrapper">
      <div>
        <span className="my_work_card_title">
          <sup>TITLE:</sup>
        </span>
        <div>
          <h2>{option.title}</h2>
        </div>
        <IconsComponent options={option.icons?.map((icon) => icon)} />
      </div>
      <div>
        <span className="my_work_card_title">
          <sup>TECH-STACK:</sup>
        </span>
        <p>{option.techStack}</p>
      </div>
      <div>
        <span className="my_work_card_title">
          <sup>URL:</sup>
        </span>
        <p>
          <a href={option.url} target="_blank" rel="noreferrer">
            {option.title}
          </a>
        </p>
      </div>
      <div>
        <span className="my_work_card_title">
          <sup>GITHUB:</sup>
        </span>
        {option?.github.map((link, i) => (
          <p key={`${id}-github-${i}`}>
            <a href={link} target="_blank" rel="noreferrer">
              {option.title}
            </a>
          </p>
        ))}
      </div>

      <div>
        <span className="my_work_card_title">
          <sup>DESCRIPTION:</sup>
        </span>
        <p>{option.description}</p>
      </div>
      <div>
        <span className="my_work_card_title">
          <sup>FEATURES:</sup>
        </span>
        {option.features.map((feature, i) => (
          <div key={`${id}-feature-${i}`}>
            <p>{JSON.stringify(feature).replace(/["']/g, '')}</p>
          </div>
        ))}
      </div>
    </div>
  ));
};

MyWorkCardComponent.propTypes = {
  id: PropTypes.string,
};

export default MyWorkCardComponent;
