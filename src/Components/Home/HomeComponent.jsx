import IconsComponent from '../Icons/IconsComponent';
import TellMeComponent from '../TellMe/TellMeComponent';

const HomeComponent = () => {
  const thisIsMe = ['Wh', 'at', ' I', ' Do!'];
  const imageRoutesTop = [
    { name: 'react JS', path: '../assets/images/react-2.svg' },
    { name: 'redux', path: '../assets/images/redux.svg' },
    { name: 'mongoDB', path: '../assets/images/mongodb.svg' },
    { name: 'node JS', path: '../assets/images/nodejs.svg' },
    { name: 'auth zero', path: '../assets/images/auth0.svg' },
    { name: 'CSS', path: '../assets/images/css3.svg' },
    { name: 'html', path: '../assets/images/html5.svg' },
    { name: 'javascript', path: '../assets/images/javascript.svg' },
  ];
  const imageRoutesBottom = [
    { name: 'vue', path: '../assets/images/vue-js-1.svg' },
    { name: 'typescript', path: '../assets/images/typescript.svg' },
    { name: 'rxjs', path: '../assets/images/rxjs-1.svg' },
    { name: 'ngrx', path: '../assets/images/ngrx.svg' },
    { name: 'angular', path: '../assets/images/angular-icon.svg' },
    { name: 'bootstrap', path: '../assets/images/bootstrap-5-1.svg' },
    { name: 'jquery', path: '../assets/images/jquery.svg' },
    { name: 'php', path: '../assets/images/php-1.svg' },
    { name: 'mysql', path: '../assets/images/mySql.svg' },
  ];
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={[...thisIsMe]} />
      </legend>
      <IconsComponent options={[...imageRoutesTop]} />
      <div>
        <h1>Web and browser development</h1>
        <p>
          I am a web developer currently located in Guildford, Surrey in the
          United Kingdom. Utilizing my decade of experience, I design fast,
          efficient, and visually pleasing websites and applications using
          current web technologies and methods, constructed to enhance and
          streamline business operations...
        </p>
        <p>
          I am a self-taught web developer with a passion for learning web
          development and a strong belief in the advancement of the web.
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
          web developer. I have a keen interest in emerging technologies and am
          always looking for ways to apply my skills to real-world problems.
          Whether it's developing complex web applications or creating simple,
          user-friendly websites, I am dedicated to producing high-quality work
          that meets the needs of the client.
        </p>
        <p>
          In summary, I am a highly motivated, self-taught web developer with a
          passion for learning, problem-solving, and collaboration. With my
          strong technical skills, dedication to quality, and ability to work
          well under pressure, I am confident in my ability to make a valuable
          contribution to any web development project.
        </p>
      </div>
      <IconsComponent options={[...imageRoutesBottom]} />
    </fieldset>
  );
};

export default HomeComponent;
