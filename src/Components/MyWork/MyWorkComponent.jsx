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
        <MyWorkCardComponent options={myWorkData} />
      </div>
    </fieldset>
  );
};

export default MyWorkComponent;
