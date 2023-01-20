import { NavLink } from 'react-router-dom';
import TellMeComponent from '../../TellMe/TellMeComponent';

const CvComponent = () => {
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={['My', ' CV']} />
      </legend>
      <NavLink to="/forms">
        <TellMeComponent text={['re', 'gist', 'er']} />
      </NavLink>
      <div>
        <h3>Just a bit</h3>
        <p>
          Thank you for showing interest in my CV. If this is your first time
          here then please click the login/register button below and follow the
          instructions.
        </p>
        <p>
          Once you hv registered you will have access to a secure area of my
          website.
        </p>
        <p>
          Once you have registered you will be directed to a secure page where
          you will be presented with a link to download a PDF copy of my CV.
        </p>
        <h3>The legal Stuff</h3>
        <p>
          If you are not happy with this approach then please send me a message
          via my contact form and I will happily remove your details.
        </p>
      </div>
    </fieldset>
  );
};

export default CvComponent;
