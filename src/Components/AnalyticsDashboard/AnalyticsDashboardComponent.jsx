import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnalyticsAction } from '../../Store/Actions/analyticsActions';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';
import './AnalyticsDashboardComponent.css';
import moment from 'moment';

const AnalyticsDashboardComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let ignore = false;
    dispatch(getAnalyticsAction());
    if (!ignore) return () => (ignore = true);
  }, [dispatch]);

  const getAnalytics = useSelector((state) => state.getAnalytics);
  const { loading, error, analyticsData } = getAnalytics;

  const homeRoute = analyticsData?.filter((location) => {
    if (
      location.location === 'https://garyallin.uk' ||
      location.location === 'https://garyallin.uk/#/'
    ) {
      return location;
    }
    return false;
  });

  const aboutRoute = analyticsData?.filter((location) => {
    if (
      location.location === 'https://garyallin.uk/about' ||
      location.location === 'https://garyallin.uk/#/about'
    ) {
      return location;
    }
    return false;
  });

  const myWorkRoute = analyticsData?.filter((location) => {
    if (
      location.location === 'https://garyallin.uk/my-work' ||
      location.location === 'https://garyallin.uk/#/my-work'
    ) {
      return location;
    }
    return false;
  });

  const contactRoute = analyticsData?.filter((location) => {
    if (
      location.location === 'https://garyallin.uk/contact' ||
      location.location === 'https://garyallin.uk/#/contact'
    ) {
      return location;
    }
    return false;
  });

  const dashboardRoute = analyticsData?.filter((location) => {
    if (
      location.location === 'https://garyallin.uk/dashboard' ||
      location.location === 'https://garyallin.uk/#/dashboard'
    ) {
      return location;
    }
    return false;
  });

  const cvRoute = analyticsData?.filter((location) => {
    if (
      location.location === 'https://garyallin.uk/cv' ||
      location.location === 'https://garyallin.uk/#/cv'
    ) {
      return location;
    }
    return false;
  });

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <ToasterComponent options={{ error }} />
          <div className="analytics_wrapper">
            <div>
              <h3>Home Route</h3>
              <h4>{homeRoute?.length} hits.</h4>
              {homeRoute?.map((route) => (
                <div key={route._id} className="item">
                  <p>Referrer: {route.referrer}</p>
                  <p>location: {route.location}</p>
                  <p>platform: {route.platform}</p>
                  <p>languages: {route.languages}</p>
                  <p>IP: {route.ipAddress}</p>
                  <p>User Agent: {route.userAgent}</p>
                  <p>
                    created: {moment(route.updatedAt).format('Do MMM YYYY')}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {' '}
              <h3>About Route</h3>
              <h4>{aboutRoute?.length} hits.</h4>
              {aboutRoute?.map((route) => (
                <div key={route._id} className="item">
                  <p>Referrer: {route.referrer}</p>
                  <p>location: {route.location}</p>
                  <p>platform: {route.platform}</p>
                  <p>languages: {route.languages}</p>
                  <p>IP: {route.ipAddress}</p>
                  <p>User Agent: {route.userAgent}</p>
                  <p>
                    created: {moment(route.updatedAt).format('Do MMM YYYY')}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3>My-Work Route</h3>
              <h4>{myWorkRoute?.length} hits.</h4>
              {myWorkRoute?.map((route) => (
                <div key={route._id} className="item">
                  <p>Referrer: {route.referrer}</p>
                  <p>location: {route.location}</p>
                  <p>platform: {route.platform}</p>
                  <p>languages: {route.languages}</p>
                  <p>IP: {route.ipAddress}</p>
                  <p>User Agent: {route.userAgent}</p>
                  <p>
                    created: {moment(route.updatedAt).format('Do MMM YYYY')}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3>Contact Route</h3>
              <h4>{contactRoute?.length} hits.</h4>
              {contactRoute?.map((route) => (
                <div key={route._id} className="item">
                  <p>Referrer: {route.referrer}</p>
                  <p>location: {route.location}</p>
                  <p>platform: {route.platform}</p>
                  <p>languages: {route.languages}</p>
                  <p>IP: {route.ipAddress}</p>
                  <p>User Agent: {route.userAgent}</p>
                  <p>
                    created: {moment(route.updatedAt).format('Do MMM YYYY')}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3>CV Route</h3>
              <h4>{cvRoute?.length} hits.</h4>
              {cvRoute?.map((route) => (
                <div key={route._id} className="item">
                  <p>Referrer: {route.referrer}</p>
                  <p>location: {route.location}</p>
                  <p>platform: {route.platform}</p>
                  <p>languages: {route.languages}</p>
                  <p>IP: {route.ipAddress}</p>
                  <p>User Agent: {route.userAgent}</p>
                  <p>
                    created: {moment(route.updatedAt).format('Do MMM YYYY')}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3>Dashboard Route</h3>
              <h4>{dashboardRoute?.length} hits.</h4>
              {dashboardRoute?.map((route) => (
                <div key={route._id} className="item">
                  <p>Referrer: {route.referrer}</p>
                  <p>location: {route.location}</p>
                  <p>platform: {route.platform}</p>
                  <p>languages: {route.languages}</p>
                  <p>IP: {route.ipAddress}</p>
                  <p>User Agent: {route.userAgent}</p>
                  <p>
                    created: {moment(route.updatedAt).format('Do MMM YYYY')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AnalyticsDashboardComponent;
