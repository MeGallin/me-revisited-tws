import '../../Css/textHighlight.css';
import TellMeComponent from '../TellMe/TellMeComponent';
import TextHighLightComponent from '../TextHighLight/TextHighLightComponent';

const AboutComponent = () => {
  const text = [' about', ' me'];
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={[...text]} />
      </legend>
      <div>
        <h1>Skills Summary</h1>
        <p>Proficient in HTML(5) and CSS(3), javascript and jQuery.</p>
        <p>
          Commercial experience <TextHighLightComponent text={'ReactJS'} /> and{' '}
          <mark>REDUX</mark>.
        </p>
        <p>
          Commercial experience <TextHighLightComponent text={'nodeJS'} /> and{' '}
          <TextHighLightComponent text={'express'} />
        </p>
        <p>
          Commercial experience in <TextHighLightComponent text={'angularJS'} />{' '}
          and <TextHighLightComponent text={'angular2/6'} />
        </p>
        <p>Familiar with typescript and ES6.</p>
        <p>Comfortable using Linex terminal.</p>
        <p>Comfortable with Bootstrap 3/4.</p>
        <p>
          Skilled in responsive web design, cross-browser compatibility, and
          hard coding flexible sites.
        </p>
        <p>Experience in server-side web development using PHP, PDO.</p>

        <h1>Technologies</h1>
        <p>
          <TextHighLightComponent text={'MERN'} /> stack
        </p>
        <p>
          ReactJS(v18), react router(v6) and <mark>REDUX</mark> state
          management.
        </p>
        <p>
          AngularJS and Angular(v2+) and ngrx, RXJS, Typescript and Angular Cli.
        </p>
        <p>VueJs(2/3), VueX, Vue Cli.</p>
        <p>HTML, CSS(3) and BootStrap(3/4), Javascript and ES6, jQuery, PHP.</p>
        <p>NodeJS and Express.</p>
        <p>
          <mark>GITHUB</mark>, GitLab and GIT version control.
        </p>

        <h1>Project Management</h1>
        <p>JIRA and Confluence. </p>
        <p>Crucible and Redmine.</p>
        <p>Slack</p>
        <p>Monday.com</p>
        <p>Trello</p>

        <h1>Web design and UX</h1>
        <p>Adobe PhotoShop and Illustrator.</p>

        <h1>Hosting</h1>
        <p>Cpanel</p>
        <p>Xampp</p>
        <p>Apache</p>
        <p>Ubuntu</p>

        <h1>Integrations</h1>
        <p>ASW, S3.</p>
        <p>Firebase</p>
        <p>Auth0</p>
      </div>
    </fieldset>
  );
};

export default AboutComponent;
