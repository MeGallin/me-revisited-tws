import './TextHighLightComponent.css';

const TextHighLightComponent = ({ text }) => {
  return (
    <span className="text_high_light_title" data={text}>
      {text}
    </span>
  );
};

export default TextHighLightComponent;
