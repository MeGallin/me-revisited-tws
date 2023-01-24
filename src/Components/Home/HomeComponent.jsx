import TellMeComponent from '../TellMe/TellMeComponent';

const HomeComponent = () => {
  const thisIsMe = ['Wh', 'at', ' I', ' Do!'];
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={[...thisIsMe]} />
      </legend>
      <div>
        <h3>Web and browser Development</h3>
        <p>
          I am a web developer currently located in Guildford, Surrey in the
          United Kingdom. Utilizing my decade of experience, I design fast,
          efficient, and visually pleasing websites and applications using
          current web technologies and methods, constructed to enhance and
          streamline business operations.
        </p>
      </div>
    </fieldset>
  );
};

export default HomeComponent;
