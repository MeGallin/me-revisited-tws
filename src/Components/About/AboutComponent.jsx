import '../../Css/textHighlight.css';
import TellMeComponent from '../TellMe/TellMeComponent';

const AboutComponent = () => {
  const text = [' about', ' me'];
  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={[...text]} />
      </legend>
      <div>
        <ul>
          <h1>Skills Summary</h1>
          <li>Proficient in HTML(5) and CSS(3), javascript and jQuery.</li>
          <li>
            Commercial experience in <mark>AngularJS</mark> and{' '}
            <mark>Angular 2/6</mark>
          </li>
          <li>
            Commercial experience <mark>ReactJS</mark> and <mark>Redux</mark>.
          </li>
          <li>
            Commercial experience <mark>NodeJS</mark> and <mark>Express</mark>
          </li>
          <li>Familiar with typescript and ES6.</li>
          <li>Comfortable using Linex terminal.</li>
          <li>Comfortable with Bootstrap 3/4.</li>
          <li>
            Skilled in responsive web design, cross-browser compatibility, and
            hard coding flexible sites.
          </li>
          <li>Experience in server-side web development using PHP, PDO.</li>
        </ul>

        <ul>
          <h1>Technologies</h1>
          <li>MERN stack</li>
          <li>ReactJS(v18), react router(v6) and REDUX state management.</li>
          <li>
            AngularJS and Angular(v2+) and ngrx, RXJS, Typescript and Angular
            Cli.
          </li>
          <li>VueJs(2/3), VueX, Vue Cli.</li>
          <li>
            NodeJS, HTML, CSS(3) and BootStrap(3/4), Javascript and ES6, jQuery,
            PHP.
          </li>
          <li>NodeJS and Express.</li>
          <li>GitHub, GitLab and GIT.</li>
        </ul>

        <ul>
          <h1>Project Management</h1>
          <li>JIRA and Confluence. </li>
          <li>Crucible and Redmine.</li>
          <li>Slack</li>
          <li>Monday.com</li>
          <li>Trello</li>
        </ul>

        <ul>
          <h1>Web design and UX</h1>
          <li>Adobe PhotoShop and Illustrator.</li>
        </ul>

        <ul>
          <h1>Hosting</h1>
          <li>Cpanel</li>
          <li>Xampp</li>
          <li>Apache</li>
          <li>Ubuntu</li>
        </ul>

        <ul>
          <h1>Integrations</h1>
          <li>ASW, S3.</li>
          <li>Firebase</li>
          <li>Auth0</li>
        </ul>
      </div>
    </fieldset>
  );
};

export default AboutComponent;
