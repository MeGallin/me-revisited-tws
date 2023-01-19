import React from 'react';
import ButtonComponent from '../Button/ButtonComponent';
import InputComponent from '../Input/InputComponent';
import TellMeComponent from '../TellMe/TellMeComponent';

const ContactComponent = () => {
  return (
    <div>
      <TellMeComponent text={['Contact', ' Me']} />
      <ButtonComponent
        type={'button'}
        text={'text'}
        variant={'dark'}
        disabled={false}
      />
      <InputComponent type={'text'} label={'name'} />
    </div>
  );
};

export default ContactComponent;
