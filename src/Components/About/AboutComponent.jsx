import '../../Css/textHighlight.css';
import IconsComponent from '../Icons/IconsComponent';
import TellMeComponent from '../TellMe/TellMeComponent';
import TextHighLightComponent from '../TextHighLight/TextHighLightComponent';

const AboutComponent = () => {
  const text = [' about', ' me'];
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
        <TellMeComponent text={[...text]} />
      </legend>

      <div>
        <IconsComponent options={[...imageRoutesTop]} />
        <h1>Skills Summary</h1>
        <p>
          Comfortable in front-end technologies, including HTML5, CSS3,
          JavaScript, jQuery and Bootstrap 3/4.
        </p>
        <p>
          Experienced in <TextHighLightComponent text={'reactJS'} /> and{' '}
          <span className="marked_text">REDUX</span>, as well as{' '}
          <TextHighLightComponent text={'nodejs'} /> and{' '}
          <span className="marked_text">EXPRESS</span> for server-side
          development.
        </p>
        <p>
          Experienced in <TextHighLightComponent text={'angularJS'} /> and{' '}
          <TextHighLightComponent text={'angular2/6'} />, and familiar with
          TypeScript and ES6.
        </p>
        <p>Good knowledge of databases such as MongoDB and MySQL</p>
        <p>Understanding of Agile methodology and workflow.</p>
        <p>
          Good understanding in code versioning tools such as Git and using
          GitHub and GitLab
        </p>
        <p>Comfortable using Linex terminal.</p>
        <p>Familiar with Webpack and writing bash scripts.</p>
        <p>
          Experienced in responsive web design, cross-browser compatibility, and
          hard coding flexible sites.
        </p>
        <p>Experience in server-side web development using NODEJS and PHP.</p>

        <IconsComponent options={[...imageRoutesBottom]} />
        <h1>Technologies</h1>
        <p>
          <TextHighLightComponent text={'MERN'} /> stack.
        </p>
        <p>
          ReactJS(v18), react router(v6) and{' '}
          <span className="marked_text">REDUX</span> state management.
        </p>
        <p>NodeJS and Express.</p>
        <p>MongoDB and MySQL</p>
        <p>
          AngularJS and Angular(v2+) and ngrx, RXJS, Typescript and Angular Cli.
        </p>
        <p>VueJs(2/3), VueX, Vue Cli.</p>
        <p>HTML, CSS(3) and BootStrap(3/4), Javascript and ES6, jQuery, PHP.</p>
        <p>
          <span className="marked_text">GITHUB</span>, GitLab and GIT version
          control.
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
