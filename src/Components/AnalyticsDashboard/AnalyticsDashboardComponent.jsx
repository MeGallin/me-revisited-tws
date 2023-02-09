import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnalyticsAction } from '../../Store/Actions/analyticsActions';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';
import './AnalyticsDashboardComponent.css';

import AnalyticsInfoComponent from './AnalyticsInfo/AnalyticsInfoComponent';

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

          <AnalyticsInfoComponent
            props={[
              {
                homeRoute,
                aboutRoute,
                myWorkRoute,
                contactRoute,
                dashboardRoute,
                cvRoute,
              },
            ]}
          />
        </>
      )}
    </>
  );
};

export default AnalyticsDashboardComponent;
