import { NavLink } from 'react-router-dom';
import TellMeComponent from '../TellMe/TellMeComponent';
import TextHighLightComponent from '../TextHighLight/TextHighLightComponent';
import BetaReleaseComponent from '../BetaRelease/BetaReleaseComponent';

const HomeComponent = () => {
  const thisIsMe = ['Wh', 'at', ' I', ' Do!'];

  return (
    <fieldset className="fieldSet">
      <BetaReleaseComponent />
      <legend>
        <TellMeComponent text={[...thisIsMe]} />
      </legend>

      <div>
        <h1>Web and browser development</h1>
        <p>
          I am a web <TextHighLightComponent text={'developer'} /> currently
          located in Guildford, Surrey in the United Kingdom. Utilizing my
          decade of experience, I design fast, efficient, and visually pleasing
          websites and applications using current web technologies and methods,
          constructed to enhance and streamline business operations.
        </p>
        <p>
          I am a self-taught web <mark>developer</mark> with a passion for
          learning web development and a strong belief in the advancement of the
          web.
        </p>
        <p>
          I am concise, diligent and conscientious and find logical and clear
          solutions to problems. I am self-motivated, lead by example and handle
          every task with the sole aim of completion. I take responsibility for
          my actions and thrive under pressure.
        </p>
        <p>
          In addition to my core skills, I also have experience working in a
          team environment and have developed strong communication and
          collaboration skills. I am able to work effectively with others to
          achieve shared goals and am always willing to go the extra mile to
          ensure that projects are completed on time and to the highest
          standard. My ability to lead by example and take initiative has been
          demonstrated in my previous experiences, where I have taken on
          additional responsibilities and have been recognized for my hard work
          and dedication.
        </p>
        <p>
          I am constantly seeking out new opportunities to learn and grow as a
          web <TextHighLightComponent text={'developer'} />. I have a keen
          interest in emerging technologies and am always looking for ways to
          apply my skills to real-world problems. Whether it's developing
          complex web applications or creating simple, user-friendly websites, I
          am dedicated to producing high-quality work that meets the needs of
          the client.
        </p>
        <p>
          In summary, I am a highly motivated, self-taught web{' '}
          <mark>developer</mark> with a passion for learning, problem-solving,
          and collaboration. With my strong technical skills, dedication to
          quality, and ability to work well under pressure, I am confident in my
          ability to make a valuable contribution to any web development
          project.
        </p>
      </div>

      <NavLink to="/recent-past">
        <mark>Checkout my playground.</mark>
      </NavLink>
    </fieldset>
  );
};

export default HomeComponent;
