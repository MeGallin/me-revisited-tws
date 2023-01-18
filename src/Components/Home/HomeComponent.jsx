import TellMeComponent from '../TellMe/TellMeComponent';

const HomeComponent = () => {
  const thisIsMe = ['This', ' is', ' my', ' home', ' page!'];
  return (
    <>
      <TellMeComponent text={[...thisIsMe]} />
    </>
  );
};

export default HomeComponent;
