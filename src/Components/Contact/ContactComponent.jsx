import React from 'react';
import ButtonComponent from '../Button/ButtonComponent';
import InputComponent from '../Input/InputComponent';
import TellMeComponent from '../TellMe/TellMeComponent';

const ContactComponent = () => {
  return (
    <>
      <fieldset className="fieldSet">
        <legend>
          <TellMeComponent text={['Get', ' in', ' touch']} />
        </legend>
        <div>
          <ButtonComponent
            type={'button'}
            text={'text'}
            variant={'dark'}
            disabled={false}
          />
          <InputComponent type={'text'} label={'name'} />
        </div>
      </fieldset>

      <fieldset className="fieldSet">
        <legend>
          <TellMeComponent text={['Stuff']} />
        </legend>
        <div>
          <p>Other stuff here</p>
        </div>
      </fieldset>
    </>
  );
};

export default ContactComponent;
