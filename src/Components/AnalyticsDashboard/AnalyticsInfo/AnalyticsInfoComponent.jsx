import { useState, useEffect } from 'react';
import './AnalyticsInfoComponent.css';

import moment from 'moment';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

const AnalyticsInfoComponent = ({ props }) => {
  useEffect(() => {
    'fired';
    setHome(props[0].homeRoute);
    setAbout(props[0].aboutRoute);
    setMyWork(props[0].myWorkRoute);
    setContact(props[0].contactRoute);
    setCv(props[0].cvRoute);
    setDashboard(props[0].dashboardRoute);
  }, [props]);

  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showMyWork, setShowMyWork] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const [home, setHome] = useState([]);
  const [about, setAbout] = useState([]);
  const [myWork, setMyWork] = useState([]);
  const [contact, setContact] = useState([]);
  const [cv, setCv] = useState([]);
  const [dashboard, setDashboard] = useState([]);

  const homeColour = 'rgba(240, 173, 78, 1)';
  const aboutColour = 'rgba(190, 79, 12, 1)';
  const myWorkColour = 'rgba(236, 127, 55, 1)';
  const contactColour = 'rgba(255, 99, 0, 1)';
  const cVColour = 'crimson';
  const dashboardColour = 'lightBlue';

  const data = [
    {
      id: '1',
      name: 'Home',
      value: home?.length,
      fill: homeColour,
    },
    {
      id: '2',
      name: 'About',
      value: about?.length,
      fill: aboutColour,
    },
    {
      id: '3',
      name: 'My Work',
      value: myWork?.length,
      fill: myWorkColour,
    },
    {
      id: '4',
      name: 'Contact',
      value: contact?.length,
      fill: contactColour,
    },
    { id: '5', name: 'CV', value: cv?.length, fill: cVColour },
    {
      id: '6',
      name: 'Dashboard',
      value: dashboard?.length,
      fill: dashboardColour,
    },
  ];

  function getUniqueIpAddresses(obj) {
    const seenIpAddresses = new Map();
    const uniqueIpAddresses = [];
    for (const key in obj) {
      const item = obj[key];
      if (!seenIpAddresses.has(item.ipAddress)) {
        seenIpAddresses.set(item.ipAddress, 1);
      } else {
        seenIpAddresses.set(
          item.ipAddress,
          seenIpAddresses.get(item.ipAddress) + 1,
        );
      }
    }
    for (const [ipAddress, count] of seenIpAddresses) {
      uniqueIpAddresses.push({ name: ipAddress, hits: count });
    }
    return uniqueIpAddresses;
  }

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
        <h3>Click a Segment For Details</h3>
        <div style={{ width: '100%', height: 360, margin: '10px auto' }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={136}
                stroke="pink"
                percentage={16}
                label
                onClick={(e) => handleChart(e)}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ width: '100%', height: 360, margin: '10px auto' }}>
          {showHome ? (
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={getUniqueIpAddresses(home)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="0.3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hits" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          ) : null}
          {showAbout ? (
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={getUniqueIpAddresses(about)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="0.3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hits" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          ) : null}
          {showMyWork ? (
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={getUniqueIpAddresses(myWork)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="0.3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hits" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          ) : null}
          {showContact ? (
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={getUniqueIpAddresses(contact)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="0.3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hits" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          ) : null}
          {showCV ? (
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={getUniqueIpAddresses(cv)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="0.3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hits" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          ) : null}
          {showDashboard ? (
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={getUniqueIpAddresses(dashboard)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="0.3 3" />
                <XAxis dataKey="`name`" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hits" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          ) : null}
        </div>
      </div>

      <div className="item">
        {showHome ? (
          <div>
            <div className="item_header">
              <h3 style={showHome ? { color: homeColour } : null}>
                Home Route
              </h3>
              <h4>{home?.length} hits.</h4>
            </div>

            {home?.map((route) => (
              <div key={route._id} className="item_content">
                <div className="item_content_item">
                  <div>Referrer</div>
                  <p>{route.referrer}</p>
                  <div>location</div>
                  <p>{route.location}</p>
                  <div>IP</div>
                  <p>{route.ipAddress}</p>
                </div>
                <div className="item_content_item">
                  <div>platform</div>
                  <p> {route.platform}</p>
                  <div>languages</div>
                  <p> {route.languages}</p>
                </div>
                <div className="item_content_item">
                  <div>User Agent</div>
                  <p> {route.userAgent}</p>
                </div>
                <div className="item_content_item">
                  <div>Hits</div>
                  <p>
                    {moment(new Date()).diff(moment(route.createdAt), 'days')}{' '}
                    days ago.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {showAbout ? (
          <div>
            <div className="item_header">
              <h3 style={showAbout ? { color: aboutColour } : null}>
                About Route
              </h3>
              <h4>{about?.length} hits.</h4>
            </div>
            {about?.map((route) => (
              <div key={route._id} className="item_content">
                <div className="item_content_item">
                  <div>Referrer</div>
                  <p>{route.referrer}</p>
                  <div>location</div>
                  <p>{route.location}</p>
                  <div>IP</div>
                  <p>{route.ipAddress}</p>
                </div>
                <div className="item_content_item">
                  <div>platform</div>
                  <p> {route.platform}</p>
                  <div>languages</div>
                  <p> {route.languages}</p>
                </div>
                <div className="item_content_item">
                  <div>User Agent</div>
                  <p> {route.userAgent}</p>
                </div>
                <div className="item_content_item">
                  <div>Hits</div>
                  <p>
                    {moment(new Date()).diff(moment(route.createdAt), 'days')}{' '}
                    days ago.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {showMyWork ? (
          <div>
            <div className="item_header">
              <h3 style={showMyWork ? { color: myWorkColour } : null}>
                My-Work Route
              </h3>
              <h4>{myWork?.length} hits.</h4>
            </div>
            {myWork?.map((route) => (
              <div key={route._id} className="item_content">
                <div className="item_content_item">
                  <div>Referrer</div>
                  <p>{route.referrer}</p>
                  <div>location</div>
                  <p>{route.location}</p>
                  <div>IP</div>
                  <p>{route.ipAddress}</p>
                </div>
                <div className="item_content_item">
                  <div>platform</div>
                  <p> {route.platform}</p>
                  <div>languages</div>
                  <p> {route.languages}</p>
                </div>
                <div className="item_content_item">
                  <div>User Agent</div>
                  <p> {route.userAgent}</p>
                </div>
                <div className="item_content_item">
                  <div>Hits</div>
                  <p>
                    {moment(new Date()).diff(moment(route.createdAt), 'days')}{' '}
                    days ago.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {showContact ? (
          <div>
            <div className="item_header">
              <h3 style={showContact ? { color: contactColour } : null}>
                Contact Route
              </h3>
              <h4>{contact?.length} hits.</h4>
            </div>
            {contact?.map((route) => (
              <div key={route._id} className="item_content">
                <div className="item_content_item">
                  <div>Referrer</div>
                  <p>{route.referrer}</p>
                  <div>location</div>
                  <p>{route.location}</p>
                  <div>IP</div>
                  <p>{route.ipAddress}</p>
                </div>
                <div className="item_content_item">
                  <div>platform</div>
                  <p> {route.platform}</p>
                  <div>languages</div>
                  <p> {route.languages}</p>
                </div>
                <div className="item_content_item">
                  <div>User Agent</div>
                  <p> {route.userAgent}</p>
                </div>
                <div className="item_content_item">
                  <div>Hits</div>
                  <p>
                    {moment(new Date()).diff(moment(route.createdAt), 'days')}{' '}
                    days ago.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {showCV ? (
          <div>
            <div className="item_header">
              <h3 style={showCV ? { color: cVColour } : null}>CV Route</h3>
              <h4>{cv?.length} hits.</h4>
            </div>
            {cv?.map((route) => (
              <div key={route._id} className="item_content">
                <div className="item_content_item">
                  <div>Referrer</div>
                  <p>{route.referrer}</p>
                  <div>location</div>
                  <p>{route.location}</p>
                  <div>IP</div>
                  <p>{route.ipAddress}</p>
                </div>
                <div className="item_content_item">
                  <div>platform</div>
                  <p> {route.platform}</p>
                  <div>languages</div>
                  <p> {route.languages}</p>
                </div>
                <div className="item_content_item">
                  <div>User Agent</div>
                  <p> {route.userAgent}</p>
                </div>
                <div className="item_content_item">
                  <div>Hits</div>
                  <p>
                    {moment(new Date()).diff(moment(route.createdAt), 'days')}{' '}
                    days ago.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {showDashboard ? (
          <div>
            <div className="item_header">
              <h3 style={showDashboard ? { color: dashboardColour } : null}>
                Dashboard Route
              </h3>
              <h4>{dashboard?.length} hits.</h4>
            </div>
            {dashboard?.map((route) => (
              <div key={route._id} className="item_content">
                <div className="item_content_item">
                  <div>Referrer</div>
                  <p>{route.referrer}</p>
                  <div>location</div>
                  <p>{route.location}</p>
                  <div>IP</div>
                  <p>{route.ipAddress}</p>
                </div>
                <div className="item_content_item">
                  <div>platform</div>
                  <p> {route.platform}</p>
                  <div>languages</div>
                  <p> {route.languages}</p>
                </div>
                <div className="item_content_item">
                  <div>User Agent</div>
                  <p> {route.userAgent}</p>
                </div>
                <div className="item_content_item">
                  <div>Hits</div>
                  <p>
                    {moment(new Date()).diff(moment(route.createdAt), 'days')}{' '}
                    days ago.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AnalyticsInfoComponent;
