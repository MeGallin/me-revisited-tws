import './AnalyticsInfoComponent.css';
import moment from 'moment';
import { PieChart, Pie, Tooltip } from 'recharts';
import { useState } from 'react';

const AnalyticsInfoComponent = ({ props }) => {
  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showMyWork, setShowMyWork] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const home = props[0].homeRoute;
  const about = props[0].aboutRoute;
  const myWork = props[0].myWorkRoute;
  const contact = props[0].contactRoute;
  const cv = props[0].cvRoute;
  const dashboard = props[0].dashboardRoute;

  const data = [
    { id: '1', name: 'Home', value: home?.length },
    { id: '2', name: 'About', value: about?.length },
    { id: '3', name: 'My Work', value: myWork?.length },
    { id: '4', name: 'Contact', value: contact?.length },
    { id: '5', name: 'CV', value: cv?.length },
    { id: '6', name: 'Dashboard', value: dashboard?.length },
  ];

  const handleChart = (e) => {
    setShowHome(false);
    setShowAbout(false);
    setShowMyWork(false);
    setShowContact(false);
    setShowCV(false);
    setShowDashboard(false);

    switch (e.name) {
      case 'Home':
        setShowHome((prev) => (prev = !prev));
        break;
      case 'About':
        setShowAbout((prev) => (prev = !prev));
        break;
      case 'My Work':
        setShowMyWork((prev) => (prev = !prev));
        break;
      case 'Contact':
        setShowContact((prev) => (prev = !prev));
        break;
      case 'CV':
        setShowCV((prev) => (prev = !prev));
        break;
      case 'Dashboard':
        setShowDashboard((prev) => (prev = !prev));
        break;
      default:
        break;
    }
  };

  return (
    <div className="analytics_wrapper">
      <div className="item">
        <PieChart width={340} height={340}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={136}
            fill="lightBlue"
            label
            onClick={(e) => handleChart(e)}
          />
          <Tooltip />
        </PieChart>
      </div>

      {showHome ? (
        <div>
          <h3>Home Route</h3>
          <h4>{home?.length} hits.</h4>
          {home?.map((route) => (
            <div key={route._id} className="item">
              <p>Referrer: {route.referrer}</p>
              <p>location: {route.location}</p>
              <p>platform: {route.platform}</p>
              <p>languages: {route.languages}</p>
              <p>IP: {route.ipAddress}</p>
              <p>User Agent: {route.userAgent}</p>
              <p>created: {moment(route.updatedAt).format('Do MMM YYYY')}</p>
            </div>
          ))}
        </div>
      ) : null}

      {showAbout ? (
        <div>
          <h3>About Route</h3>
          <h4>{about?.length} hits.</h4>
          {about?.map((route) => (
            <div key={route._id} className="item">
              <p>Referrer: {route.referrer}</p>
              <p>location: {route.location}</p>
              <p>platform: {route.platform}</p>
              <p>languages: {route.languages}</p>
              <p>IP: {route.ipAddress}</p>
              <p>User Agent: {route.userAgent}</p>
              <p>created: {moment(route.updatedAt).format('Do MMM YYYY')}</p>
            </div>
          ))}
        </div>
      ) : null}

      {showMyWork ? (
        <div>
          <h3>My-Work Route</h3>
          <h4>{myWork?.length} hits.</h4>
          {myWork?.map((route) => (
            <div key={route._id} className="item">
              <p>Referrer: {route.referrer}</p>
              <p>location: {route.location}</p>
              <p>platform: {route.platform}</p>
              <p>languages: {route.languages}</p>
              <p>IP: {route.ipAddress}</p>
              <p>User Agent: {route.userAgent}</p>
              <p>created: {moment(route.updatedAt).format('Do MMM YYYY')}</p>
            </div>
          ))}
        </div>
      ) : null}

      {showContact ? (
        <div>
          <h3>Contact Route</h3>
          <h4>{contact?.length} hits.</h4>
          {contact?.map((route) => (
            <div key={route._id} className="item">
              <p>Referrer: {route.referrer}</p>
              <p>location: {route.location}</p>
              <p>platform: {route.platform}</p>
              <p>languages: {route.languages}</p>
              <p>IP: {route.ipAddress}</p>
              <p>User Agent: {route.userAgent}</p>
              <p>created: {moment(route.updatedAt).format('Do MMM YYYY')}</p>
            </div>
          ))}
        </div>
      ) : null}

      {showCV ? (
        <div>
          <h3>CV Route</h3>
          <h4>{cv?.length} hits.</h4>
          {cv?.map((route) => (
            <div key={route._id} className="item">
              <p>Referrer: {route.referrer}</p>
              <p>location: {route.location}</p>
              <p>platform: {route.platform}</p>
              <p>languages: {route.languages}</p>
              <p>IP: {route.ipAddress}</p>
              <p>User Agent: {route.userAgent}</p>
              <p>created: {moment(route.updatedAt).format('Do MMM YYYY')}</p>
            </div>
          ))}
        </div>
      ) : null}

      {showDashboard ? (
        <div>
          <h3>Dashboard Route</h3>
          <h4>{dashboard?.length} hits.</h4>
          {dashboard?.map((route) => (
            <div key={route._id} className="item">
              <p>Referrer: {route.referrer}</p>
              <p>location: {route.location}</p>
              <p>platform: {route.platform}</p>
              <p>languages: {route.languages}</p>
              <p>IP: {route.ipAddress}</p>
              <p>User Agent: {route.userAgent}</p>
              <p>created: {moment(route.updatedAt).format('Do MMM YYYY')}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AnalyticsInfoComponent;
