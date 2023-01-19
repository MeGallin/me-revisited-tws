import React from 'react';
import TellMeComponent from '../TellMe/TellMeComponent';

const AboutComponent = () => {
  const text = ['Let', ' me', ' tell', ' you', ' all', ' about', ' me'];
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={[...text]} />
      </legend>
    </fieldset>
  );
};

export default AboutComponent;
