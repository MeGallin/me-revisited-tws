import TellMeComponent from '../TellMe/TellMeComponent';
import './MyWorkComponent.css';

const MyWorkComponent = () => {
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={['My', ' w', 'ork.']} />
      </legend>

      <div>
        <h3>Your Corporate Memory</h3>
        <p>TECH STACK</p>
        <p>GIT HUB</p>
        <p>URL</p>
        <p>Description</p>
        <p>Features</p>
      </div>

      <div>
        <h3>Club Manager</h3>
        <p>TECH STACK</p>
        <p>GIT HUB</p>
        <p>URL</p>
        <p>Description</p>
        <p>Features</p>
      </div>
    </fieldset>
  );
};

export default MyWorkComponent;
