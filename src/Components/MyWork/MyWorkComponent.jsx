import { NavLink } from 'react-router-dom';
import MyWorkCardComponent from '../MyWorkCard/MyWorkCardComponent';
import TellMeComponent from '../TellMe/TellMeComponent';
import './MyWorkComponent.css';
import { myWorkData } from '../../assets/data/myWork_data';

const MyWorkComponent = () => {
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={['My', ' w', 'ork.']} />
      </legend>

      <div>
        <NavLink to="/recent-past">
          <span className="marked_text">Checkout my playground.</span>
        </NavLink>
        <MyWorkCardComponent options={myWorkData} />
      </div>
    </fieldset>
  );
};

export default MyWorkComponent;
