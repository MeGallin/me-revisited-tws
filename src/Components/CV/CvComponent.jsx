import { NavLink } from 'react-router-dom';
import ButtonComponent from '../Button/ButtonComponent';
import TellMeComponent from '../TellMe/TellMeComponent';
import TimeLineComponent from '../TimeLine/TimeLineComponent';
import { cvData } from '../../assets/data/cv_data';

const CvComponent = () => {
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={['My', ' CV']} />
      </legend>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>Take a peek</h1>
          <NavLink to="/forms">
            <ButtonComponent
              id="login_register"
              type="button"
              text="login or register"
              variant="info"
              disabled={false}
            />
          </NavLink>
        </div>

        <p>Thank you for showing interest in my CV.</p>
        <p>
          If this is your first time here, please click the login/register
          button below and follow the instructions.
        </p>
        <p>
          Once you have registered, you will be directed to a secure page where
          you will be presented with a link to download a PDF copy of my CV.
        </p>
        <h3>Play Ground</h3>
        <p>
          {' '}
          <NavLink to="/recent-past">
            <span className="marked_text">Checkout my playground.</span>
          </NavLink>
        </p>

        <h1>Timeline</h1>
        <p>Here is a timeline covering the past few years.</p>
        <TimeLineComponent props={[...cvData]} />
      </div>
    </fieldset>
  );
};

export default CvComponent;
