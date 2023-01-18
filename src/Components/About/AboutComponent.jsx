import React from 'react';
import TellMeComponent from '../TellMe/TellMeComponent';

const AboutComponent = () => {
  const text = ['Let', ' me', ' tell', ' you', ' all', ' about', ' me'];
  return (
    <div>
      <TellMeComponent text={[...text]} />
    </div>
  );
};

export default AboutComponent;
