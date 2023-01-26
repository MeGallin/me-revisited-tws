import { NavLink } from 'react-router-dom';
import ButtonComponent from '../Button/ButtonComponent';
import TellMeComponent from '../TellMe/TellMeComponent';
import TimeLineComponent from '../TimeLine/TimeLineComponent';
import { cvData } from '../../assets/cvData/cv_data';

const CvComponent = () => {
  console.log(cvData);
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={['My', ' CV']} />
      </legend>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Just a peek</h3>
          <NavLink to="/forms">
            <ButtonComponent
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

        <h3>Timeline</h3>
        <p>Here is a timeline for the past few years.</p>
        <TimeLineComponent props={[...cvData]} />

        <h3>The legal Stuff</h3>
        <p>
          If you are not satisfied with this approach, please message me via my
          contact form and I will gladly remove your details.
        </p>
      </div>
    </fieldset>
  );
};

export default CvComponent;
