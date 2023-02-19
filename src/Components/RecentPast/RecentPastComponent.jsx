import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TellMeComponent from '../TellMe/TellMeComponent';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import './RecentPastComponent.css';
import {
  myNewsAction,
  presentlyAction,
  recentPastAction,
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
        //Dispatch Action
        dispatch(recentPastAction());
        setShowRecentPast((prev) => (prev = !prev));

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

  const recentPast = useSelector((state) => state.recentPast);
  const {
    loading: recentPastLoading,
    error: recentPastError,
    data: recentPastData,
  } = recentPast;

  const myNews = useSelector((state) => state.myNews);
  const { loading, error, data } = myNews;

  return (
    <fieldset className="fieldSet">
      <legend>
        <TellMeComponent text={['My', ' Playground']} />
      </legend>
      <div className="recent_past_wrapper">
        <div>
          <h2>As we speak</h2>
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
        </div>

        <div>
          <h2>Recent Past</h2>
          {recentPastError ? (
            <ToasterComponent options={{ recentPastError }} />
          ) : null}
          {showRecentPast ? (
            <>
              <div
                onClick={() => handleShowSection('recentPast')}
                className="icons_click_wrapper"
              >
                <p>Done reading?</p>{' '}
                <FaAngleDoubleUp className="angel-up-icon" size={22} />
              </div>

              {recentPastLoading ? (
                <SpinnerComponent />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: recentPastData }}></div>
              )}
            </>
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
        </div>

        <div>
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
        </div>
      </div>
    </fieldset>
  );
};

export default RecentPastComponent;
