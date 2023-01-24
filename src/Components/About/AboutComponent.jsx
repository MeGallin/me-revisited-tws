import React from 'react';
import TellMeComponent from '../TellMe/TellMeComponent';

const AboutComponent = () => {
  const text = [' about', ' me'];
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={[...text]} />
      </legend>
      <div>
        <h3>Skill Summary</h3>
        <p>I have...</p>
        <h3>Technologies</h3>
        <p>I have...</p>
        <h3>Project Management</h3>
        <p>I have...</p>
        <h3>Web design and UX</h3>
        <p>I have...</p>
        <h3>Hosting</h3>
        <p>I have...</p>
        <h3>Integrations</h3>
        <p>I have...</p>
      </div>
    </fieldset>
  );
};

export default AboutComponent;
