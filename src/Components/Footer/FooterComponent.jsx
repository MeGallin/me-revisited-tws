import DateTimeComponent from '../DateTime/DateTimeComponent';
import PageHitsComponent from '../PageHits/PageHitsComponent';
import './FooterComponent.css';
const FooterComponent = () => {
  return (
    <footer>
      <div className="global_wrapper">
        <div className="footer_links">
          <p>
            <a
              className="footer_link"
              href="https://github.com/MeGallin"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
          </p>
          <p className="spacer">|</p>
          <p>
            <a
              className="footer_link"
              href="https://jsfiddle.net/"
              target="_blank"
              rel="noreferrer"
            >
              FIDDEJS
            </a>
          </p>
          <p className="spacer">|</p>
          <p>
            <a
              className="footer_link"
              href="https://www.linkedin.com/mynetwork/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </p>
          <p className="spacer">|</p>
          <p>
            <a
              className="footer_link"
              href="mailto:me@garyallin.uk"
              target="_blank"
              rel="noreferrer"
            >
              EMAIL
            </a>
          </p>
        </div>
        <DateTimeComponent />
        <PageHitsComponent />
      </div>
    </footer>
  );
};

export default FooterComponent;
