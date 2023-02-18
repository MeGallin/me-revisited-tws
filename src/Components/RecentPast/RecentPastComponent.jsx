import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TellMeComponent from '../TellMe/TellMeComponent';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import './RecentPastComponent.css';
import {
  myNewsAction,
  presentlyAction,
} from '../../Store/Actions/fileUploadActions';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';

const RecentPastComponent = () => {
  const dispatch = useDispatch();
  const [showPresently, setShowPresently] = useState(true);
  const [showRecentPast, setShowRecentPast] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const handleShowSection = (option) => {
    switch (option) {
      case 'presently':
        //Dispatch Action
        dispatch(presentlyAction());
        setShowPresently((prev) => (prev = !prev));

        break;
      case 'news':
        //Dispatch Action
        dispatch(myNewsAction());
        setShowNews((prev) => (prev = !prev));

        break;
      case 'recentPast':
        setShowRecentPast((prev) => (prev = !prev));
        //Dispatch Action

        break;
      default:
        break;
    }
  };

  const presently = useSelector((state) => state.presently);
  const {
    loading: presentlyLoading,
    error: presentlyError,
    data: presentlyData,
  } = presently;

  const myNews = useSelector((state) => state.myNews);
  const { loading, error, data } = myNews;

  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={['My', ' Playground']} />
      </legend>

      <h1>As we speak</h1>
      {presentlyError ? (
        <ToasterComponent options={{ presentlyError }} />
      ) : null}
      {showPresently ? (
        <>
          <div
            onClick={() => handleShowSection('presently')}
            className="icons_click_wrapper"
          >
            <p>Done reading?</p>{' '}
            <FaAngleDoubleUp className="angel-up-icon" size={22} />
          </div>

          {presentlyLoading ? (
            <SpinnerComponent />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: presentlyData }}></div>
          )}
        </>
      ) : (
        <>
          <div
            onClick={() => handleShowSection('presently')}
            className="icons_click_wrapper"
          >
            <p>Click here to see more?</p>
            <FaAngleDoubleDown className="angel-down-icon" size={22} />
          </div>
        </>
      )}

      <h2>Recent Past</h2>
      {showRecentPast ? (
        <div>
          <div
            onClick={() => handleShowSection('recentPast')}
            className="icons_click_wrapper"
          >
            <p>Done reading?</p>{' '}
            <FaAngleDoubleUp className="angel-up-icon" size={22} />
          </div>
          <p>
            <a href="http://www.padgas.com" target="_blank" rel="noreferrer">
              Padgas Ltd
            </a>{' '}
            is another site built using angular. The next phase of this project
            I will be incorporating an authentication system for their clients
            to access their personal information. A nice feature of the site a
            the "zoom effect" of the images. I did this with pure CSS using
            animations.
            <a
              href="http://www.centrasiainvest.com"
              target="_blank"
              rel="noreferrer"
            >
              Central Asia Investment Capital PLC
            </a>{' '}
            built with angularJS featuring a simple members only area. The whole
            site is built using angular and bootstrap(3) hence the
            responsiveness...speed and of course it it fully responsive to any
            device.
            <a
              href="http://www.tinaquinn.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Tina Quinn Drama School
            </a>{' '}
            is a site that I did in PHP becasue I wanted to create templates.
            Nice clean styled with a little help from bootstrap(3). It features
            a carousel and contact page.
            <a
              href="http://www.tricoreholdings.com"
              target="_blank"
              rel="noreferrer"
            >
              Tricore Business Management Services
            </a>
            , the brief was for a processional business looking site to
            compliment their professional profile. It was built using PHP and
            bootstrap(3). I did the design, artwork as well as the development.
            The site also includes a live news feed which is built from scratch
            (no plug-in) and pings from fresh news every 10 minutes.
            <a
              href="http://www.trilogywebsolutions.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Trilogy Web Solutions
            </a>{' '}
            built using PHP, MySql and JavaScript, along with the obligatory
            HTML and CSS. This site has over one hundred thousand lines of code.
            The brief was for a flat modern look. I used the Bootstrap framework
            for the front-end flexibility. A fully function administration
            back-end allowing the administrator full control over the database
            and data capture area. Complete integration with WHM, WHMCS, Cpanel,
            WorldPay and PayPal to provide a fully functional web hosting site.
            Simple in the front, smart at the back.
            <a
              href="http://www.oleatros.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Oleatros FX
            </a>{' '}
            is clean, straight-to-the-point design featuring a content slider
            (JavaScript) and contact form (PHP).
            <a href="http://trilogyfx.com" target="_blank" rel="noreferrer">
              Trilogy FX
            </a>{' '}
            a little more complex which included live data feeds and live news
            feeds.
            <a
              href="http://www.maycrafts.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              MayCrafts
            </a>{' '}
            is feature-packed site with light boxes and plenty of graphics.
            <a
              href="http://www.livenotice.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              LiveNotice&copy;
            </a>{' '}
            is a simple example of a CMS. All the content on the site can be
            edited and uploaded from any internet based device.
            <a
              href="http://huskys.livenotice.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Huskys
            </a>{' '}
            is similar to LiveNotice&copy; and the graphic display was done
            purely with CSS.
            <a
              href="http://www.quicknote.livenotice.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Quicknote
            </a>{' '}
            was done in angularJS and stores data to the browser locally. It was
            also done only using CSS.
            <a
              href="http://4ovb.livenotice.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              4ovb brownies
            </a>{' '}
            was created as a members-only site for a local brownies club and was
            one I did for my local community.
          </p>
        </div>
      ) : (
        <>
          <div
            onClick={() => handleShowSection('recentPast')}
            className="icons_click_wrapper"
          >
            <p>Click here to see more?</p>
            <FaAngleDoubleDown className="angel-down-icon" size={22} />
          </div>
        </>
      )}

      <h2>Obscure</h2>
      {error ? <ToasterComponent options={{ error }} /> : null}
      {showNews ? (
        <>
          <div
            onClick={() => handleShowSection('news')}
            className="icons_click_wrapper"
          >
            <p>Done reading?</p>{' '}
            <FaAngleDoubleUp className="angel-up-icon" size={22} />
          </div>

          {loading ? (
            <SpinnerComponent />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: data }}></div>
          )}
        </>
      ) : (
        <div
          onClick={() => handleShowSection('news')}
          className="icons_click_wrapper"
        >
          <p>Click here to see more?</p>
          <FaAngleDoubleDown className="angel-down-icon" size={22} />
        </div>
      )}
    </fieldset>
  );
};

export default RecentPastComponent;
