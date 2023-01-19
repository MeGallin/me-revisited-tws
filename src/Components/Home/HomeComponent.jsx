import TellMeComponent from '../TellMe/TellMeComponent';

const HomeComponent = () => {
  const thisIsMe = ['This', ' is', ' my', ' home', ' page!'];
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={[...thisIsMe]} />
      </legend>
    </fieldset>
  );
};

export default HomeComponent;
